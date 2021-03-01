import React from 'react';
import { loader } from 'graphql.macro';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import { Main, Container, Approval, CardContainer } from './style';
import { useQuery } from '@apollo/client';

const QUERY_GET_MY_FAVORITE_PROJECTS = loader(
  './queryGetMyFavoriteProjects.graphql'
);

function Favorites() {
  const { currentUser, error } = useCurrentUser();

  const { data, loading } = useQuery(QUERY_GET_MY_FAVORITE_PROJECTS);

  if (error) {
    return <p>Please try again later</p>;
  }

  return (
    <Main>
      <Header />
      <Container>
        <Approval>
          <p>
            Favorite Projects <span>({data?.projects?.results?.length})</span>
          </p>
        </Approval>
        <CardContainer>
          {!data?.projects?.results?.length ? (
            <p className='noproject'>
              You dont have any favorite projects yet.
            </p>
          ) : (
            <>
              {data?.projects?.results?.map((project) => (
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
