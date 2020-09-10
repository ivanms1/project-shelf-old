import React, { createContext, useState } from 'react';

export const Context = createContext();

const userToken = localStorage.getItem('userToken');
let state = '';
if (userToken) {
  state = true;
} else {
  state = false;
}
console.log(`logged in:` + state);

export function AppContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(state);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
