import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/Signin';
import Logout from '../pages/Logout/Logout';
import Submitproject from '../pages/SubmitYourProject/Submit';
import Weekly from '../pages/WeeklyProjects/Weekly';
import Error from '../pages/Error/error';

import Activated from "../pages/Activated/Activated";
import NotActivated from "../pages/NotActivated/Notactivated";

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

function Routes(props) {
  return (
    <Switch>
      <PrivateRoutes exact path='/' component={Home}></PrivateRoutes>
      <PrivateRoutes path='/contact' component={Contact}></PrivateRoutes>
      <PublicRoutes path='/register' component={Register}></PublicRoutes>
      <PublicRoutes path='/signin' component={SignIn}></PublicRoutes>

      <PrivateRoutes path='/activated' component={Activated}></PrivateRoutes>
      <PrivateRoutes path='/notactivated' component={NotActivated}></PrivateRoutes>

      <PrivateRoutes path='/logout' component={Logout}></PrivateRoutes>
      <PrivateRoutes path='/submit' component={Submitproject}></PrivateRoutes>
      <PrivateRoutes path='/weekly' component={Weekly}></PrivateRoutes>
      <PublicRoutes component={Error}></PublicRoutes>


    </Switch>
  );
}

export default Routes;
