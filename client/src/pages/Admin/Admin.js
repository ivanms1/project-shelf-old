import React from 'react';

import Header from '../../components/Header/Header';

import { Main, Container, TabContainer, StyledNavLink } from './style';

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

function Admin({ children }) {
  return (
    <Main>
      <Header />
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
        {children}
      </Container>
    </Main>
  );
}

export default Admin;
