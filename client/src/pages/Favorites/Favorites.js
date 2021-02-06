import React from 'react';
import { Redirect } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import { Cardtwo } from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
} from './style';

function Favorites(props) {
  const { currentUser, loading, error } = useCurrentUser();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }
  console.log(currentUser);
  return (
    <Main>
      <Header />
      <Container>
        <Approval>
          <p>Favorite Projects</p>
        </Approval>
        <CardContainer>
          {currentUser.favoriteProjects.length === 0 ? (
            <p className='noproject'>
              You dont have any favorite projects yet.
            </p>
          ) : (
            <>
              {currentUser.favoriteProjects.map((project) => (
                <Cardtwo
                  key={project.id}
                  user={currentUser}
                  project={project}
                />
              ))}
            </>
          )}
        </CardContainer>
      </Container>
    </Main>
  );
}

export default Favorites;
