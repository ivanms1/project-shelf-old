import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Context } from '../Context/AppContext';

function PublicRoutes({ path, children, ...props }) {

    const hooks = useContext(Context);
    const { isAuthenticated } = hooks;

    if (isAuthenticated) {
        return <Redirect to='/'></Redirect>;
    }


    return (
        <Route path={path} {...props}>
            {children}
        </Route>
    );
}

export default PublicRoutes;