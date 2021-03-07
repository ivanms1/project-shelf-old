import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Approved from './Approved/Approved';
import NotApproved from './NotApproved/NotApproved';
import JsonData from './UserTable/JsonData';

import { Main, Container, TabContainer } from './style';

const tabs = [
  {
    title: 'Not Approved',
    path: 'approved',
  },
  {
    title: 'Approved',
    path: 'notapproved',
  },
  {
    title: 'All Users',
    path: 'allusers',
  },
];

function Admin() {
  const [page, setPage] = useState('approved');

  return (
    <Main>
      <Header />
      <Container>
        <TabContainer>
          <ul>
            {tabs.map((tab, index) => (
              <li key={index}>
                <button
                  style={{
                    backgroundColor: page === tab.path ? '#20c997' : 'white',
                    color: page === tab.path ? 'white' : '#152c5b',
                    border: page === tab.path ? '1px solid #20c997' : '',
                    fontWeight: page === tab.path ? '600' : '',
                  }}
                  onClick={() => {
                    setPage(tab.path);
                  }}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </TabContainer>

        {page === 'approved' && <NotApproved />}
        {page === 'notapproved' && <Approved />}
        {page === 'allusers' && <JsonData />}
      </Container>
    </Main>
  );
}

export default Admin;
