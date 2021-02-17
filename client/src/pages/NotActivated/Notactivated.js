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

function Notactivated() {
  const { data, loading, error } = useQuery(QUERY_GET_ALL_PROJECTS);

  const [updateStatus, { error: errorR }] = useMutation(
    MUTATION_UPDATE_PROJECT_STATUS
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }
  if (errorR) {
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
  const { projects } = data;

  const unapprovedProjects = projects.filter((project) => !project.isApproved);

  return (
    <Container>
      <ActivatedContainer>
        <main>
          <h1>Not Approved Projects</h1>

          <ProjectCollection>
            {unapprovedProjects.length ? (
              unapprovedProjects.map((project) => (
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
