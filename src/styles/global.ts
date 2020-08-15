import { createGlobalStyle } from 'styled-components';

//Image
import bgGithub from '../assets/bg-github.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5 url(${bgGithub}) no-repeat 70% top;
    -webkit-font-smooting: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
  
  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`; 