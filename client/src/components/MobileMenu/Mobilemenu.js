import React from 'react';
import { Menu, NavLinks } from './style';

export default function Mobilemenu({ close }) {
    return (
        <Menu>
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
                    <NavLinks onClick={close} activeClassName='current' to='/contact'>
                        Contact
                    </NavLinks>
                </li>
            </ul>
        </Menu>
    );
}

