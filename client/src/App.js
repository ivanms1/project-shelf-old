import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { StyledToastContainer } from '../src/components/React-Toastify/style';

import Globalstyles from './styles/Globalstyles';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Globalstyles />
      <Routes />
      <StyledToastContainer />
    </BrowserRouter>
  );
}

export default App;
