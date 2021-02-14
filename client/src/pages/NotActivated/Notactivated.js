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

function Notactivated(props) {
  const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  if (data) {
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return JSON.stringify(error, null, 2);
  }
  if (errorR) {
    console.log(errorR);
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
  const { projects } = data;

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <p>Not Approved Projects</p>

          <ProjectCollection>
            {projects.length > 0 ? (
              projects.map(
                (project) =>
                  project.isApproved === false && (
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
                  )
              )
            ) : (
              <p>No projects</p>
            )}
          </ProjectCollection>
        </main>
      </ActivatedContainer>
    </Container>
  );
}

export default Notactivated;
