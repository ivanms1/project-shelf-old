import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import Header from '../../components/Header/Header';
import Activated from '../Activated/Activated';
import NotActivated from '../NotActivated/Notactivated';
import JsonData from '../UserTable/JsonData';
import Loader from '../../components/Loader/Loader';

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

const GET_ALL_USER_QUERY = loader('../UserTable/queryGetAllUsers.graphql');

function Admin(props) {
  const [page, setPage] = useState('approved');

  const { data = {}, loading, error } = useQuery(GET_ALL_USER_QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return toast.error('Oops something went wrong.');
  }

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

        {page === 'approved' && <NotActivated />}
        {page === 'notapproved' && <Activated />}
        {page === 'allusers' && <JsonData />}
      </Container>
    </Main>
  );
}

export default Admin;
