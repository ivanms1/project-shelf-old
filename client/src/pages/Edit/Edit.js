import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';

import Modal from '../../components/PopupModal/Modal';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import ProjectForm from '../../components/Form/ProjectForm';

import { Main, Overlay, Container } from './style';

const MUTATION_UPDATE_PROJECT = loader('./mutationUpdateProject.graphql');
const QUERY_GET_PROJECT = loader('./queryGetProject.graphql');

function Edit() {
  const [deleteModelIsOpen, setDeleteModelIsOpen] = useState(false);
  const openDeleteModal = () => setDeleteModelIsOpen(true);
  const closeDeleteModal = () => setDeleteModelIsOpen(false);

  const { projectId } = useParams();

  const { data = {}, loading, error: projectError } = useQuery(
    QUERY_GET_PROJECT,
    {
      variables: {
        id: projectId,
      },
    }
  );

  const [editProject, { error }] = useMutation(MUTATION_UPDATE_PROJECT);

  if (loading) {
    return <Loader />;
  }

  if (projectError || error) {
    return <p>Sorry, something went wrong.</p>;
  }

  if (!data?.project) {
    return <p>Sorry, this project does not exist.</p>;
  }

  const { project } = data;

  function editTheProject(values) {
    if (deleteModelIsOpen) {
      editProject({
        variables: {
          projectId: project.id,
          input: {
            preview: values.preview,
            title: values.title,
            siteLink: values.siteLink,
            repoLink: values.repoLink,
            description: values.description,
            tags: values.tags.map((e) => e.value),
          },
        },
      });
      closeDeleteModal();
    }
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
          <ProjectForm
            project={project}
            onSubmit={(values) => {
              openDeleteModal();
              editTheProject(values);
            }}
          />
        </Container>
      </Overlay>

      <Modal
        type='edit'
        isOpen={deleteModelIsOpen}
        onRequestClose={closeDeleteModal}
        onClick={() => {
          closeDeleteModal();
        }}
      />
    </Main>
  );
}

export default Edit;
