import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../Context/AppContext';

import useCurrentUser from '../components/useCurrentUser/useCurrentUser';

function PrivateRoutes({ path, isForAdmin, children, ...props }) {
  const { isAuthenticated } = useContext(Context);

  const { currentUser, loading } = useCurrentUser();

  if ((!isAuthenticated || !currentUser) && !loading) {
    return <Redirect to='/signin' />;
  }

  if (isForAdmin && currentUser.role === 'USER') {
    return <Redirect to='/' />;
  }

  if (path === '/register' || path === '/signin') {
    return <Redirect to='/' />;
  }

  return (
    <Route path={path} {...props}>
      {children}
    </Route>
  );
}

export default PrivateRoutes;
