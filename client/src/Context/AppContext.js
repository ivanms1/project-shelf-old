import React, { createContext, useState, useMemo, useEffect } from 'react';

import useCurrentUser from '../components/useCurrentUser/useCurrentUser';

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

  const { currentUser, loading } = useCurrentUser();

  const value = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [
    isAuthenticated,
  ]);

  useEffect(() => {
    if (!currentUser && !loading) {
      setIsAuthenticated(false);
    }
  }, [currentUser, loading]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
