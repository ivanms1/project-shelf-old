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

const QUERY_GET_ALL_PROJECTS = loader('./queryGetAllApprovedProjects.graphql');
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

function Activated() {
  const { data, error } = useQuery(QUERY_GET_ALL_PROJECTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  async function updateProjectStatus(projectId) {
    try {
      await updateStatus({
        variables: {
          projectId: projectId,
          isApproved: false,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  if (error || errorR) {
    return <p>Sorry, something went wrong.</p>;
  }

  const {
    projects: { results },
  } = data;

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Approved Projects</h1>

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
                    kind='disapprove'
                    maxWidth='big'
                    fontSize='medium'
                    addCSS={customCss}
                    onClick={() => updateProjectStatus(project.id)}
                  >
                    Disapprove
                  </Button>
                </CardComponent>
              ))
            ) : (
              <p className='noproject'>No Approved Projects.</p>
            )}
          </ProjectCollection>
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Activated;
