import React from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Waypoint } from 'react-waypoint';

import Cardtwo from '../../components/Cardv2';

import Spinner from '../../components/Spinner';
import Loader from '../../components/Loader';

import { Container, CardContainer } from './style';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

function Home() {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_WEEKLY_PROJECTS,
    {
      variables: {
        cursor: undefined,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  );

  if (loading && !data) {
    return <Loader />;
  }

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
    <Container>
      <p>Welcome! Here are some recently submitted projects</p>
      <CardContainer>
        {networkStatus === NetworkStatus.setVariables ||
        networkStatus === NetworkStatus.refetch ||
        !data?.projects?.results?.length ? (
          <p className='noproject'>No projects are currently live</p>
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

      {loading && data?.projects?.nextCursor && (
        <Spinner padding={20} type='black' />
      )}
    </Container>
  );
}

export default Home;
