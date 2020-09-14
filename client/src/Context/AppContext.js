import React, { createContext, useState, useMemo } from 'react';

export const Context = createContext();

const userToken = localStorage.getItem('userToken');
let state = '';
if (userToken) {
  state = true;
} else {
  state = false;
}

export function AppContext({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(state);

  const value = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [
    isAuthenticated,
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
