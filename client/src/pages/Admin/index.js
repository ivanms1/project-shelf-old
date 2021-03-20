import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../../Routes/PrivateRoute';
import Approved from './Approved';
import NotApproved from './NotApproved';

import { Container, TabContainer, StyledNavLink } from './style';

const tabs = [
  {
    title: 'Not Approved',
    path: '/admin/not-approved',
  },
  {
    title: 'Approved',
    path: '/admin/approved',
  },
  {
    title: 'All Users',
    path: '/admin/allusers',
  },
];

function Admin() {
  return (
    <Container>
      <TabContainer>
        <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <StyledNavLink to={tab.path} activeClassName='current'>
                {tab.title}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </TabContainer>
      <Switch>
        <PrivateRoute path='/admin/approved' component={Approved} />
        <PrivateRoute path='/admin/not-approved' component={NotApproved} />
      </Switch>
    </Container>
  );
}

export default Admin;
