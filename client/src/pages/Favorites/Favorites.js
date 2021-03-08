import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery, NetworkStatus } from '@apollo/client';
import { Waypoint } from 'react-waypoint';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';

import { Main, Container, Approval, CardContainer } from './style';

const QUERY_GET_MY_FAVORITE_PROJECTS = loader(
  './queryGetMyFavoriteProjects.graphql'
);

function Favorites() {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_GET_MY_FAVORITE_PROJECTS,
    {
      variables: {
        cursor: undefined,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  );

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  const onRefetch = () => {
    if (!data?.projects?.nextCursor) {
      return;
    }

    fetchMore({
      variables: {
        cursor: data?.projects?.nextCursor,
      },
    });
  };

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
          {networkStatus === NetworkStatus.setVariables ||
          networkStatus === NetworkStatus.refetch ||
          !data?.projects?.results?.length ? (
            <p className='noproject'>
              You do not have any favorite projects yet
            </p>
          ) : (
            <>
              {data?.projects?.results.map((project) => (
                <Cardtwo key={project.id} project={project} />
              ))}
            </>
          )}
        </CardContainer>
        {!loading && data?.projects?.nextCursor && (
          <Waypoint onEnter={onRefetch} bottomOffset='-20%' />
        )}
        {loading && data?.projects?.nextCursor && <Spinner />}
      </Container>
    </Main>
  );
}

export default Favorites;
