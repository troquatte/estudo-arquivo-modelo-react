import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin: 40px 0 20px 0;
  display: flex;

  input{
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 20px;
    flex: 1;
    border: 2px solid #FFF;
    border-right: 0;
     
    ${(props) => props.hasError && css`
      border-color: #c53030; 
    `}

    &::placeholder{
      color: #A8A8B3;
    }
  }

  button{
    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    transition: background-color 0.2s; 

    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Repository = styled.ul`
  list-style: none;
  
  li{
    margin: 15px 0;
    transition: 0.2s;

    &:hover{
      transform: translateX(10px);
    }

    a{
      background: #FFFFFF;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      align-items: center;
      color: #3D3D4D;
      text-decoration: none;

      img{
        height: 65px;
        width: 65px;
        border-radius: 50%;
        margin-right: 15px;
      }
      p{
        strong{
          display: block;
        }
      }

      svg{
        margin-left: auto;
        color: #C9C9D4;
      }
    }
  }
`;

export const Error = styled.form`
  color: #c53030; 
`;