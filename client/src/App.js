import React from 'react';
import { Toaster } from 'react-hot-toast';

import Globalstyles from './styles/Globalstyles';
import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <>
      <Globalstyles />
      <Layout />
      <Toaster position='bottom-center' />
    </>
  );
}

export default App;
