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

const EMAIL_STRING = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=';

function Notactivated(props) {
  const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

  const [
    updateStatus,
    { data: dataR, error: errorR, loading: loadingR },
  ] = useMutation(MUTATION_UPDATE_PROJECT_STATUS);

  if (data) {
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return JSON.stringify(error, null, 2);
  }

  async function updateProjectStatus(projectId) {
    try {
      const response = await updateStatus({
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
