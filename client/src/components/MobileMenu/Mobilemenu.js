import React from 'react';
import { Menu } from './style';
import { NavLink } from 'react-router-dom';

export default function Mobilemenu({ close }) {
    return (
        <Menu>
            <ul>
                <li>
                    <NavLink onClick={close} activeClassName='current' style={{ textDecoration: 'none', color: '#474547' }} to='/'>
                        Home
                    </NavLink>
                </li>
                <li>

                    <NavLink onClick={close} activeClassName='current' style={{ textDecoration: 'none', color: '#474547' }} to='/weekly'>
                        Weekly Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={close} activeClassName='current' style={{ textDecoration: 'none', color: '#474547' }} to='/submit'>
                        Submit your Projects ?
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={close} activeClassName='current' style={{ textDecoration: 'none', color: '#474547' }} to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </Menu>
    );
}

