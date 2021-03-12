import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/Signin';
import Logout from '../pages/Logout/Logout';
import Submitproject from '../pages/SubmitYourProject/Submit';
import Weekly from '../pages/WeeklyProjects/Weekly';
import Favorites from '../pages/Favorites/Favorites';
import Error from '../pages/Error/error';
import Admin from '../pages/Admin/Admin';
import Edit from '../pages/Edit/Edit';
import CardDetails from '../components/Cardv2/CardDetails/CardDetails';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
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
  );
}

export default Routes;
