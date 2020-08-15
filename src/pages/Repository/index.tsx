import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

//Images
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

//Styles
import { Header, RepositoryInfo, Issues } from './styles';

//Api
import api from '../../services/api';

interface RepositoryParams {
  repos: string
}

interface Repository {
  full_name: string,
  description: string,
  forks_count: number,
  open_issues_count: number,
  stargazers_count: number,
  owner: {
    login: string,
    avatar_url: string
  },
}

interface Issue {
  id: number,
  title: string,
  html_url: string,
  user: {
    login: string,
  }
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repos}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`repos/${params.repos}/issues`).then((response) => {
      setIssues(response.data);
    });

  }, [params.repos])
  return (
    <>
      <Header>
        <img src={logoImg} alt="" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="" />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      {issues && (
        <Issues>
          {issues.map(r => (
            <li key={r.id}>
              <a href={`${r.html_url}`} target="_blank">
                <p>
                  <strong>{r.title}</strong>
                  {r.user.login}
                </p>
                <FiChevronRight size={20} />
              </a>
            </li>
          ))}
        </Issues>
      )}
    </>
  );
};

export default Repository;