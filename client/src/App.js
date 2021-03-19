import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Globalstyles from './styles/Globalstyles';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Globalstyles />
      <Layout />
      <Toaster position='bottom-center' />
    </BrowserRouter>
  );
}

export default App;
