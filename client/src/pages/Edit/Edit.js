import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import ProjectForm from '../../components/Form/ProjectForm';
import Modal from '../../components/PopupModal/Modal';

import { Main, Overlay, Container } from './style';

const MUTATION_UPDATE_PROJECT = loader('./mutationUpdateProject.graphql');
const QUERY_GET_PROJECT = loader('./queryGetProject.graphql');

let img = '';

function Edit() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const { projectId } = useParams();
  const history = useHistory();

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
            onSubmit={(values) =>
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
              })
            }
          />
        </Container>
        <Modal open={open} closeOnDocumentClick={false} onClose={closeModal}>
          <div className='modal'>
            <div>
              <span>Project Updated</span>
              <button onClick={closeModal}>&times;</button>
            </div>
            <div>
              <div className='imgContainer'>
                <img src={img} alt={img}></img>
              </div>
              <p className='message'>Project have been updated !</p>
              <button onClick={() => history.push('/')}>Ok</button>
            </div>
          </div>
        </Modal>
      </Overlay>
    </Main>
  );
}

export default Edit;
