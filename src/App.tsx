import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Css
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}

export default App;
