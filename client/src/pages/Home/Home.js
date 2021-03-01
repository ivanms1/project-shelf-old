import React from 'react';
import { loader } from 'graphql.macro';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Active from '../../components/Active/Active';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
} from './style';
import { useQuery } from '@apollo/client';

const QUERY_GET_MY_PROJECTS = loader('./queryGetMyProjects.graphql');

function Home() {
  const { currentUser: user } = useCurrentUser();

  const { data } = useQuery(QUERY_GET_MY_PROJECTS);

  return (
    <Main>
      <Header />

      <Container>
        <Approval>
          <p>
            Welcome {user?.name} {user?.lastName}
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
          {data?.projects?.results?.length === 0 ? (
            <p className='noproject'>You dont have any projects to ShowCase.</p>
          ) : (
            <>
              {data?.projects?.results?.map((project) => (
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
