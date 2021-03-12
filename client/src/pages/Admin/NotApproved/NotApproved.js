import React from 'react';
import { useQuery, useMutation, NetworkStatus } from '@apollo/client';
import { Waypoint } from 'react-waypoint';
import { loader } from 'graphql.macro';

import Cardtwo from '../../../components/Cardv2/Cardtwo';
import Button from '../../../components/Button/Button';
import Spinner from '../../../components/Spinner/Spinner';

import {
  Container,
  ActivatedContainer,
  ProjectCollection,
  customCss,
} from './style';

const QUERY_GET_ALL_NOT_APPROVED_PROJECTS = loader(
  './queryGetAllNotApprovedProjects.graphql'
);
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

function Notactivated() {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_GET_ALL_NOT_APPROVED_PROJECTS,
    {
      variables: {
        cursor: undefined,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  );

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  if (error || errorR) {
    return <p>Sorry, something went wrong.</p>;
  }

  const onRefetch = async () => {
    if (!data?.projects?.nextCursor) {
      return;
    }

    if (data?.projects?.results?.length === data?.projects?.totalCount) {
      return;
    }

    try {
      await fetchMore({
        variables: {
          cursor: data?.projects?.nextCursor,
        },
      });
    } catch (error) {}
  };

  async function updateProjectStatus(projectId) {
    try {
      await updateStatus({
        variables: {
          projectId: projectId,
          isApproved: true,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Not Approved Projects</h1>
          <ProjectCollection>
            {networkStatus === NetworkStatus.setVariables ||
            networkStatus === NetworkStatus.refetch ||
            !data?.projects?.results?.length ? (
              <p className='noproject'>
                You do not have any projects to showcase.
              </p>
            ) : (
              <>
                {data?.projects?.results.map((project) => (
                  <Cardtwo key={project.id} project={project}>
                    <Button
                      maxWidth='big'
                      kind='approve'
                      fontSize='medium'
                      onClick={() => updateProjectStatus(project.id)}
                      addCSS={customCss}
                    >
                      Approve
                    </Button>
                  </Cardtwo>
                ))}
              </>
            )}
          </ProjectCollection>
          {!loading && data?.projects?.nextCursor && (
            <Waypoint onEnter={onRefetch} bottomOffset='-10%' />
          )}
          {loading && data?.projects?.nextCursor && <Spinner />}
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Notactivated;
