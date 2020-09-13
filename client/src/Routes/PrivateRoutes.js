import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AppContext';

import useCurrentUser from '../components/useCurrentUser/useCurrentUser';

function PrivateRoutes({ path, children, ...props }) {
  const hooks = useContext(Context);

  const { currentUser } = useCurrentUser();

  const { isAuthenticated } = hooks;

  if (isAuthenticated || !currentUser) {
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
