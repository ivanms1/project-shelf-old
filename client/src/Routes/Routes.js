import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/Signin';
import Submitproject from '../pages/SubmitYourProject/Submit';
import Weekly from '../pages/WeeklyProjects/Weekly';
import Error from '../pages/Error/error';

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/signin' component={SignIn}></Route>
            <Route path='/submit' component={Submitproject}></Route>
            <Route path='/weekly' component={Weekly}></Route>
            <Route component={Error}></Route>
        </Switch>
    );
}

export default Routes;