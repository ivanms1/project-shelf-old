import React from 'react';
import { useQuery, useMutation, NetworkStatus } from '@apollo/client';
import { Waypoint } from 'react-waypoint';
import { loader } from 'graphql.macro';

import CardComponent from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';

import {
  Container,
  ActivatedContainer,
  ProjectCollection,
  customCss,
} from './style';
import Cardtwo from '../../components/Cardv2/Cardtwo';

const QUERY_GET_ALL_PROJECTS = loader(
  './queryGetAllDissaprovedProjects.graphql'
);
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

function Notactivated() {
  const { data, loading, error, fetchMore, networkStatus } = useQuery(
    QUERY_GET_ALL_PROJECTS,
    {
      variables: {
        cursor: undefined,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  );

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  if (error || errorR) {
    return <p>Sorry, something went wrong.</p>;
  }

  const onRefetch = async () => {
    if (!data?.projects?.nextCursor) {
      return;
    }

    try {
      const res = await fetchMore({
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

  const { projects } = data ?? [];

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Not Approved Projects</h1>

          <ProjectCollection>
            {/* {results.length ? (
              results.map((project) => (
                <CardComponent
                  key={project.id}
                  user={project.author}
                  project={project}
                  descVisible={false}
                >
                  <Button
                    maxWidth='big'
                    kind='approve'
                    fontSize='medium'
                    onClick={() => updateProjectStatus(project.id)}
                    addCSS={customCss}
                  >
                    Approve
                  </Button>
                </CardComponent> */}
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
          {loading && data?.projects?.nextCursor && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 0',
              }}
            >
              <Spinner />
            </div>
          )}
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Notactivated;
