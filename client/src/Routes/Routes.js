import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/Signin';
import Logout from '../pages/Logout/Logout';
import Approved from '../pages/Admin/Approved/Approved';
import NotApproved from '../pages/Admin/NotApproved/NotApproved';
import Submitproject from '../pages/SubmitYourProject/Submit';
import Weekly from '../pages/WeeklyProjects/Weekly';
import Favorites from '../pages/Favorites/Favorites';
import Error from '../pages/Error/error';
import Admin from '../pages/Admin/Admin';
import Edit from '../pages/Edit/Edit';
import CardDetails from '../components/Cardv2/CardDetails/CardDetails';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

function Routes() {
  return (
    <Switch>
      <PrivateRoutes exact path='/' component={Home} />
      <PrivateRoutes path='/contact' component={Contact} />
      <PublicRoutes path='/register' component={Register} />
      <PublicRoutes path='/signin' component={SignIn} />
      <PrivateRoutes isForAdmin='true' path='/admin'>
        <Admin>
          <Switch>
            <PrivateRoutes path='/admin/approved' component={Approved} />
            <PrivateRoutes path='/admin/not-approved' component={NotApproved} />
          </Switch>
        </Admin>
      </PrivateRoutes>
      <PrivateRoutes path='/logout' component={Logout} />
      <PrivateRoutes path='/edit/:projectId' component={Edit} />
      <PrivateRoutes path='/submit' component={Submitproject} />
      <PrivateRoutes path='/weekly' component={Weekly} />
      <PrivateRoutes path='/favorites' component={Favorites} />
      <PrivateRoutes
        path='/projectDetails/:projectId'
        component={CardDetails}
      />
      <PublicRoutes component={Error} />
    </Switch>
  );
}

export default Routes;
