import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';

import CardComponent from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
  ButtonHolder,
  Buttons,
  StyledPopup,
} from './style';
import {
  HeaderContainer,
  Sure,
  ButtonContainer,
} from '../../components/Header/style';

import Active from '../../components/Active/Active';
import Spinner from '../../components/Spinner/Spinner';

const GET_USER_QUERY = loader('./queryUser.graphql');
const DELETE_USER_PROJECT = loader('./mutationDeleteProject.graphql');

let toDelete = '';

function Home() {
  //eslint-disable-next-line
  const [loadingState, setLoadingState] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const closeDeleteModal = () => setDeleteOpen(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const userToken = localStorage.getItem('userToken');
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
      skip: !userToken,
    },
  });

  //since data error loading cannot be used multiple times for multiple queries or mutation we rename them

  const [
    deleteProject,
    //eslint-disable-next-line
    { data: dataR, error: errorR, loading: loadingR },
  ] = useMutation(DELETE_USER_PROJECT);

  console.log(loadingR);

  //eslint-disable-next-line
  function redirect(path) {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      return (window.location.href = path);
    }, 500);
  }

  function deleteuserProject(projectId) {
    deleteProject({ variables: { projectId: projectId } });
    history.go();
  }

  if (!userToken) {
    return <Redirect to='register' />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }

  const { user } = data;
  console.log(user);
  return (
    <Main>
      <Header />

      <Container>
        <Approval>
          <p>
            Welcome {user.name} {user.lastName}
          </p>

          <ActiveContainer>
            <div className='activeContainer'>
              <Active />
              <span className='text'>Not Approved</span>
            </div>

            <div className='activeContainer'>
              <Active active={true} />
              <span className='text'>Approved</span>
            </div>
          </ActiveContainer>
        </Approval>

        <CardContainer>
          {user.projects.length === 0 ? (
            <p className='noproject'>You dont have any projects to ShowCase.</p>
          ) : (
            <>
              {user.projects.map((users) => (
                <CardComponent key={users.id} user={user} users={users}>
                  <ButtonHolder>
                    <Buttons
                      delete
                      onClick={() => {
                        setDeleteOpen((o) => !o);
                        toDelete = users.id;
                      }}
                    >
                      Delete
                    </Buttons>
                    <Buttons onClick={() => setOpen((o) => !o)}>Edit</Buttons>
                  </ButtonHolder>
                </CardComponent>
              ))}
            </>
          )}
        </CardContainer>
      </Container>

      <StyledPopup
        open={open}
        closeOnDocumentClick={false}
        onClose={closeModal}
      >
        <HeaderContainer>
          <h1>Edit</h1>
          {/* eslint-disable-next-line */}
          <a onClick={closeModal}>X</a>
        </HeaderContainer>

        <Sure>Do you want to edit this project ?</Sure>

        <ButtonContainer>
          <button onClick={closeModal}>Cancel</button>
          <button
            onClick={() => {
              alert('ok');
            }}
          >
            Confirm
          </button>
        </ButtonContainer>
      </StyledPopup>

      {/* for delete */}
      <StyledPopup
        open={deleteOpen}
        closeOnDocumentClick={false}
        onClose={closeDeleteModal}
      >
        <HeaderContainer>
          <h1>Delete</h1>
          {/* eslint-disable-next-line */}
          <a onClick={closeDeleteModal}>X</a>
        </HeaderContainer>

        <Sure>Do you want to Delete this project ?</Sure>

        <ButtonContainer>
          <button onClick={closeDeleteModal}>Cancel</button>
          <button
            onClick={() => {
              deleteuserProject(toDelete);
            }}
          >
            Confirm
          </button>
        </ButtonContainer>
      </StyledPopup>
    </Main>
  );
}

export default Home;
