import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { StyledToastContainer } from '../src/components/React-Toastify/style';

import Globalstyles from './styles/Globalstyles';

function App() {
  return (
    <BrowserRouter>
      <Globalstyles />
      <Routes />
      <StyledToastContainer />
      <Toaster position='bottom-center' toastOptions={{ duration: 1500 }} />
    </BrowserRouter>
  );
}

export default App;
