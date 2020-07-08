import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import Globalstyles from './styles/Globalstyles';

function App() {
  return (
    <BrowserRouter>
      <Globalstyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
