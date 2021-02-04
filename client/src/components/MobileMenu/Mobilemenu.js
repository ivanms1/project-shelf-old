import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, NavLinks } from './style';

import useCurrentUser from '../useCurrentUser/useCurrentUser';
import { Context } from '../../Context/AppContext';

export default function Mobilemenu({ close }) {
  const history = useHistory();

  const tabs = {
    auth: [
      {
        title: 'Home',
        to: `/`,
        exact: true,
      },
      {
        title: 'Weekly',
        to: `/weekly`,
        exact: true,
      },
      {
        title: 'Submit Project',
        to: `/submit`,
        exact: true,
      },
      {
        title: 'ADMIN',
        to: `/admin`,
        exact: true,
      },
    ],
    notAuth: [
      {
        title: 'Register',
        to: `/register`,
        exact: true,
      },
      {
        title: 'Sign in',
        to: `/signin`,
        exact: true,
      },
    ],
  };

  const hooks = useContext(Context);
  const { isAuthenticated } = hooks;

  const { currentUser, loading, error } = useCurrentUser();

  if (loading === false && !error) {
    if (currentUser.role !== 'ADMIN') {
      const tabfilter = tabs.auth.filter((tab) => tab.title !== 'ADMIN');
      tabs.auth = tabfilter;
    }
  }

  return (
    <Menu>
      {isAuthenticated ? (
        <ul>
          {tabs.auth.map((tab) => (
            <li key={tab.title}>
              <NavLinks
                activeClassName='current'
                exact={tab.exact}
                to={tab.to}
                onClick={close}
              >
                {tab.title}
              </NavLinks>
            </li>
          ))}
          <li>
            <NavLinks
              exact={true}
              to='#'
              onClick={() => close && localStorage.setItem('userToken', '')}
            >
              Log Out
            </NavLinks>
          </li>
        </ul>
      ) : (
        <ul>
          {tabs.notAuth.map((tab) => (
            <li key={tab.title}>
              <NavLinks
                activeClassName='current'
                exact={tab.exact}
                to={tab.to}
                onClick={close}
              >
                {tab.title}
              </NavLinks>
            </li>
          ))}
        </ul>
      )}
    </Menu>
  );
}
