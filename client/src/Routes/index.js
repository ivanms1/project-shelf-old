import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Loader from '../components/Loader';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Contact = lazy(() => import('../pages/Contact'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Logout = lazy(() => import('../pages/Logout'));
const Submitproject = lazy(() => import('../pages/SubmitProject'));
const Weekly = lazy(() => import('../pages/WeeklyProjects/Weekly'));
const Favorites = lazy(() => import('../pages/Favorites'));
const Error = lazy(() => import('../pages/Error'));
const Admin = lazy(() => import('../pages/Admin'));
const Edit = lazy(() => import('../pages/Edit'));
const CardDetails = lazy(() => import('../components/Cardv2/CardDetails'));

function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>
        <PrivateRoute path='/contact'>
          <Contact />
        </PrivateRoute>
        <PublicRoute path='/register'>
          <Register />
        </PublicRoute>
        <PublicRoute path='/signin'>
          <SignIn />
        </PublicRoute>
        <PrivateRoute isForAdmin='true' path='/admin'>
          <Admin />
        </PrivateRoute>
        <PrivateRoute path='/logout'>
          <Logout />
        </PrivateRoute>
        <PrivateRoute path='/edit/:projectId'>
          <Edit />
        </PrivateRoute>
        <PrivateRoute path='/submit'>
          <Submitproject />
        </PrivateRoute>
        <PrivateRoute path='/weekly'>
          <Weekly />
        </PrivateRoute>
        <PrivateRoute path='/favorites'>
          <Favorites />
        </PrivateRoute>
        <PrivateRoute path='/projectDetails/:projectId'>
          <CardDetails />
        </PrivateRoute>
        <PublicRoute>
          <Error />
        </PublicRoute>
      </Switch>
    </Suspense>
  );
}

export default Routes;
