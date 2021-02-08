import React from 'react';
import { Redirect } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import { Cardtwo } from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Active from '../../components/Active/Active';
import Loader from '../../components/Loader/Loader';

import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
} from './style';

const GET_USER_QUERY = loader('./queryUser.graphql');

function Home() {
  const userToken = localStorage.getItem('userToken');

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
      skip: !userToken,
    },
  });

  if (!userToken) {
    return <Redirect to='register' />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }

  const { user } = data;

  return (
    <Main>
      <Header />

      <Container>
        <Approval>
          <p>
            Welcome {user.name} {user.lastName}
          </p>

          <ActiveContainer>
            <div className='activeContainer'>
              <Active />
              <span className='text'>Not Approved</span>
            </div>

            <div className='activeContainer'>
              <Active active />
              <span className='text'>Approved</span>
            </div>
          </ActiveContainer>
        </Approval>

        <CardContainer>
          {user.projects.length === 0 ? (
            <p className='noproject'>You dont have any projects to ShowCase.</p>
          ) : (
            <>
              {user.projects.map((project) => (
                <Cardtwo key={project.id} user={user} project={project} />
              ))}
            </>
          )}
        </CardContainer>
      </Container>
    </Main>
  );
}

export default Home;
