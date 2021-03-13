import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Context } from '../Context/AppContext';

function PublicRoutes({ path, children, ...props }) {
  const { isAuthenticated } = useContext(Context);

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
