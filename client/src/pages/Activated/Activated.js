import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import CardComponent from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';

import {
  Container,
  ActivatedContainer,
  ProjectCollection,
  customCss,
} from './style';

const QUERY_GET_ALL_PROJECTS = loader('./queryGetProjects.graphql');
const MUTATION_UPDATE_PROJECT_STATUS = loader(
  './mutationUpdateProjectStatus.graphql'
);

function Activated() {
  const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return JSON.stringify(error, null, 2);
  }

  if (errorR) {
    return JSON.stringify(errorR, null, 2);
  }

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

  const { projects } = data;

  const approvedProjects = projects.filter((project) => project.isApproved);

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Approved Projects</h1>

          <ProjectCollection>
            {approvedProjects.length ? (
              approvedProjects.map((project) => (
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
