import React from 'react';
import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

import { Main, Container, Approval, CardContainer } from './style';

function Favorites() {
  const { currentUser, loading, error } = useCurrentUser();

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
            Favorite Projects{' '}
            <span>({currentUser.favoriteProjects.length})</span>
          </p>
        </Approval>
        <CardContainer>
          {!currentUser.favoriteProjects.length ? (
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
