import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Style
import { Title, Form, Repository, Error } from './style'

//Images
import logoImg from '../../assets/logo.svg';

//Icons
import { FiChevronRight } from 'react-icons/fi';

//Api
import api from '../../services/api';

interface InterfaceRepository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  },
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<InterfaceRepository[]>(() => {
    const storageRepos = localStorage.getItem('@github:repositories');

    if (storageRepos) {
      return JSON.parse(storageRepos)
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@github:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newRepo) {
      return setInputError('Digite o autor/nome do repositório');
    }

    try {
      const response = await api.get<InterfaceRepository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputError('');
    } catch (err) {
      return setInputError('Erro na Busca deste repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="" />

      <Title>Explore repositórios no Github.</Title>
      <Form hasError={!!inputError} action="" onSubmit={handleAddRepository}>
        <input type="text" onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite aqui" />
        <button>Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map(r => (
          <li key={r.full_name}>
            <Link to={`/repository/${r.full_name}`}>
              <img src={r.owner.avatar_url} alt="" />
              <p>
                <strong>{r.full_name}</strong>
                {r.description}
              </p>
              <FiChevronRight size={20} />
            </Link>
          </li>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;