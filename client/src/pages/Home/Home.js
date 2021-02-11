import React from 'react';
import { Redirect } from 'react-router-dom';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Active from '../../components/Active/Active';
import Loader from '../../components/Loader/Loader';
import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
} from './style';

function Home() {
  const { currentUser: user, loading, error } = useCurrentUser();

  if (!user) {
    return <Redirect to='register' />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }

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
