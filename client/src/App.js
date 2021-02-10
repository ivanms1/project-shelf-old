import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Globalstyles from './styles/Globalstyles';

function App() {
  return (
    <BrowserRouter>
      <Globalstyles />
      <Routes />
      <Toaster position='bottom-center' toastOptions={{ duration: 1500 }} />
    </BrowserRouter>
  );
}

export default App;
