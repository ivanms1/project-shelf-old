import React, { useContext, useReducer } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AppContext';

function PrivateRoutes({ path, children, isForAdmin, ...props }) {
  const hooks = useContext(Context);
  const { isAuthenticated } = hooks;

  // if (isForAdmin && user.role !== 'ADMIN') {
  // }

  if (isAuthenticated) {
    if (path === '/register' || path === '/signin') {
      return <Redirect to='/' />;
    }
  }

  if (!isAuthenticated) {
    return <Redirect to='signin' />;
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  );
}

export default PrivateRoutes;
