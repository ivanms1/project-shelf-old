import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import CardComponent from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import {
  Container,
  ActivatedContainer,
  ProjectCollection,
  customCss,
} from './style';

const QUERY_GET_ALL_PROJECTS = loader(
  './queryGetAllDissaprovedProjects.graphql'
);
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

function Notactivated() {
  const { data, error } = useQuery(QUERY_GET_ALL_PROJECTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  if (error || errorR) {
    return <p>Sorry, something went wrong.</p>;
  }

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

  //data takes time to load so destruct might give error when its not loaded
  const {
    projects: { results },
  } = data;

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Not Approved Projects</h1>

          <ProjectCollection>
            {results.length ? (
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
                </CardComponent>
              ))
            ) : (
              <p className='noproject'>No Unapproved Projects.</p>
            )}
          </ProjectCollection>
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Notactivated;
