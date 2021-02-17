import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import ProjectForm from '../../components/Form/ProjectForm';

import useCurrentUser from '../../components/useCurrentUser/useCurrentUser';

import { Main, Overlay, Container } from './style';

const MUTATION_UPDATE_PROJECT = loader('./mutationUpdateProject.graphql');
const QUERY_GET_PROJECT = loader('./queryGetProject.graphql');

function Edit() {
  const { currentUser: user, loading, error: errorUser } = useCurrentUser();

  const { projectId } = useParams();

  const {
    data: GetProjectData = {},
    loading: GetProjectLoading,
    error: GetProjecterror,
  } = useQuery(QUERY_GET_PROJECT, {
    variables: {
      id: projectId,
    },
  });

  const [sendInputs, { error }] = useMutation(MUTATION_UPDATE_PROJECT);

  if (loading || GetProjectLoading) {
    return <Loader />;
  }

  if (errorUser) {
    return <p>Sorry, something went wrong.</p>;
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>;
  }

  if (GetProjecterror) {
    return <p>Sorry, something went wrong.</p>;
  }

  const { getProject } = GetProjectData;

  return (
    <Main>
      <Header />
      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>
          <ProjectForm user={user} project={getProject} mutation={sendInputs} />
        </Container>
      </Overlay>
    </Main>
  );
}

export default Edit;
