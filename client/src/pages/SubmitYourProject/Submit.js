import React from 'react';
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';

import Header from '../../components/Header/Header';
import ProjectForm from '../../components/Form/ProjectForm';
import Loader from '../../components/Loader/Loader';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import { Main, Overlay, Container } from './style';
const CREATE_PROJECT_MUTATION = loader('./mutationCreateProject.graphql');

function Submit() {
  const { currentUser: user, loading: currentUserLoading } = useCurrentUser();

  const [createProject] = useMutation(CREATE_PROJECT_MUTATION, {
    update(cache, { data: { createProject } }) {
      cache.modify({
        id: cache.identify(user),
        fields: {
          projects(existingProjects = []) {
            return [...existingProjects, createProject];
          },
        },
      });
    },
  });

  if (currentUserLoading) {
    return <Loader />;
  }
  return (
    <Main>
      <Header />
      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>
          <ProjectForm user={user} mutation={createProject} />
        </Container>
      </Overlay>
    </Main>
  );
}

export default Submit;
