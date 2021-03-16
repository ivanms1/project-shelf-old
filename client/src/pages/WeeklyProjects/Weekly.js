import React from 'react';
import { useQuery, NetworkStatus } from '@apollo/client';
import { loader } from 'graphql.macro';
import { Waypoint } from 'react-waypoint';

import Cardtwo from '../../components/Cardv2/Cardtwo';

import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';
import Loader from '../../components/Loader/Loader';

import { Main, Container, SearchContainer, CardContainer } from './style';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

function Weekly() {
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
    <Main>
      <Container>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <CardContainer>
          {networkStatus === NetworkStatus.setVariables ||
          networkStatus === NetworkStatus.refetch ||
          !data?.projects?.results?.length ? (
            <p className='noproject'>No projects are currently live :(</p>
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

export default Weekly;
