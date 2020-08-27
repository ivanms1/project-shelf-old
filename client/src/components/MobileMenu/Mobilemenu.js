import React, { useContext } from 'react';
import { Menu, NavLinks } from './style';

import { Context } from '../../Context/AppContext';

export default function Mobilemenu({ close }) {

    const hooks = useContext(Context);
    const { isAuthenticated } = hooks;

    return (
        <Menu>
            {isAuthenticated ?
                <ul>
                    <li>
                        <NavLinks exact onClick={close} activeClassName='current' to='/'>
                            Home
                    </NavLinks>
                    </li>
                    <li>

                        <NavLinks onClick={close} activeClassName='current' to='/weekly'>
                            Weekly Projects
                    </NavLinks>
                    </li>
                    <li>
                        <NavLinks onClick={close} activeClassName='current' to='/submit'>
                            Submit your Projects ?
                    </NavLinks>
                    </li>
                    <li>
                        <NavLinks onClick={close} activeClassName='current' to='/logout'>
                            Logout
                    </NavLinks>
                    </li>
                </ul>
                :
                <ul>
                    <li>
                        <NavLinks onClick={close} activeClassName='current' to='/register'>
                            Register
                        </NavLinks>
                    </li>
                    <li>
                        <NavLinks onClick={close} activeClassName='current' to='/signin'>
                            Sign in
                        </NavLinks>
                    </li>
                </ul>
            }
        </Menu>
    );
}

