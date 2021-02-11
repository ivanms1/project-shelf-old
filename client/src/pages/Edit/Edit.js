import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import EditForm from './EditForm';
import PopupModal from '../../components/PopupModal/PopupModal';

import { Main, Container } from './style';

const userToken = localStorage.getItem('userToken');

const GET_USER_QUERY = loader('./queryGetUser.graphql');
const CREATE_PROJECT_MUTATION = loader('./mutationUpdateProject.graphql');
const QUERY_GET_PROJECT_DATA = loader('./queryGetProject.graphql');

let img = '';

function Edit(props) {
  const history = useHistory();
  const { projectId } = useParams();

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
      skip: !userToken,
    },
  });

  const {
    data: GetProjectData = {},
    loading: GetProjectLoading,
    error: GetProjecterror,
  } = useQuery(QUERY_GET_PROJECT_DATA, {
    variables: {
      id: projectId,
    },
  });

  const [sendInputs, { error }] = useMutation(CREATE_PROJECT_MUTATION);

  if (loading || GetProjectLoading) {
    return <Loader />;
  }

  if (error || !data) {
    return <Loader />;
  }

  if (error || !GetProjectData) {
    return <Loader />;
  }

  if (GetProjecterror) {
    return console.log(GetProjecterror);
  }

  const { getProject } = GetProjectData;

  const { user } = data;

  //creating projects
  async function onSubmit(data) {
    try {
      await sendInputs({
        variables: {
          projectId: projectId,
          input: {
            preview: data.preview,
            title: data.title,
            siteLink: data.siteLink,
            repoLink: data.repoLink,
            description: data.description,
          },
        },
      });
      img = data.preview || getProject.preview;
      history.push('/');
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  return (
    <Main>
      <Header />
      <div style={{ backgroundColor: '#F7F8FC' }}>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>

          {user && (
            <EditForm user={user} onSubmit={onSubmit} project={getProject} />
          )}
        </Container>
      </div>

      <PopupModal open={open} closeOnDocumentClick={false} onClose={closeModal}>
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
      </PopupModal>
    </Main>
  );
}

export default Edit;
