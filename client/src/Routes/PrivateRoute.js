import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAppContext } from '../Context/AppContext';

import useCurrentUser from '../components/useCurrentUser';

function PrivateRoutes({ path, isForAdmin, children, ...props }) {
  const { isAuthenticated } = useAppContext();

  const { currentUser, loading } = useCurrentUser();

  if ((!isAuthenticated || !currentUser) && !loading) {
    return <Redirect to='/login' />;
  }

  if (isForAdmin && currentUser?.role === 'USER') {
    return <Redirect to='/' />;
  }

  if (path === '/register' || path === '/login') {
    return <Redirect to='/' />;
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  );
}

export default PrivateRoutes;
