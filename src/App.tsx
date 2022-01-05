import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { BetProvider } from './hooks/useBet';
import { AuthProvider } from './hooks/useAuth';


const App = (): JSX.Element => {
  return (
    
    <BrowserRouter>
    
      <GlobalStyles />
      <AuthProvider>
        <BetProvider>    
          <Header />    
          <Routes />      
          <ToastContainer autoClose={3000} />
        </BetProvider>
      </AuthProvider>
    </BrowserRouter>
    
  );
};

export default App;
