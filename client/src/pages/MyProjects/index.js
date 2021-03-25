import React from 'react';
import { loader } from 'graphql.macro';
import { Waypoint } from 'react-waypoint';
import { useQuery, NetworkStatus } from '@apollo/client';

import Cardtwo from '../../components/Cardv2';

import Active from '../../components/Active';
import Spinner from '../../components/Spinner';
import Loader from '../../components/Loader';

import { Container, Approval, CardContainer, ActiveContainer } from './style';

const QUERY_GET_MY_PROJECTS = loader('./queryGetMyProjects.graphql');

function MyProjects() {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_GET_MY_PROJECTS,
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
      <Approval>
        <p>My Projects</p>

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
        {networkStatus === NetworkStatus.setVariables ||
        networkStatus === NetworkStatus.refetch ||
        !data?.projects?.results?.length ? (
          <p className='noproject'>You do not have any projects to showcase.</p>
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

export default MyProjects;
