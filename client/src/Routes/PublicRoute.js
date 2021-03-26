import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAppContext } from '../Context/AppContext';

function PublicRoutes({ path, children, ...props }) {
  const { isAuthenticated } = useAppContext();

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  );
}

export default PublicRoutes;
