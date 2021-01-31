import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';

import CardComponent from '../../components/Card/Card';
import { Cardtwo } from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Active from '../../components/Active/Active';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';

import {
  Main,
  Container,
  Approval,
  CardContainer,
  ActiveContainer,
  ButtonHolder,
  CustomDeleteButtonCSS,
  StyledPopup,
} from './style';
import {
  HeaderContainer,
  Sure,
  ButtonContainer,
} from '../../components/Header/style';

const GET_USER_QUERY = loader('./queryUser.graphql');
const DELETE_USER_PROJECT = loader('./mutationDeleteProject.graphql');

let toDelete = '';
let toEdit = '';

function Home() {
  const history = useHistory();
  //eslint-disable-next-line
  const [loadingState, setLoadingState] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const closeDeleteModal = () => setDeleteOpen(false);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const userToken = localStorage.getItem('userToken');

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
  ] = useMutation(DELETE_USER_PROJECT, {
    update(cache, { data: { deleteProject } }) {
      const cachedata = cache.read({
        query: GET_USER_QUERY,
        variables: {
          id: userToken,
          skip: !userToken,
        },
      });

      cache.writeQuery({
        query: GET_USER_QUERY,
        variables: {
          id: userToken,
          skip: !userToken,
        },
        data: {
          ...cachedata,
          user: {
            ...cachedata.user,
            projects: cachedata.user.projects.filter(
              (project) => project.id !== deleteProject
            ),
          },
        },
      });

      //just to see if the cache reads the new project
      const cachedata2 = cache.read({
        query: GET_USER_QUERY,
        variables: {
          id: userToken,
          skip: !userToken,
        },
      });
    },
  });

  //eslint-disable-next-line
  function redirect(path) {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      return (window.location.href = path);
    }, 500);
  }

  function projectToEdit(projectId) {
    setOpen(false);
    history.push(`/edit/${projectId}`);
  }

  async function deleteuserProject(projectId) {
    await deleteProject({
      variables: {
        projectId: projectId,
      },
    });
    await setDeleteOpen(false);
  }

  if (!userToken) {
    return <Redirect to='register' />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }

  const { user } = data;

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
              {user.projects.map((project) => (
                <Cardtwo
                  key={project.id}
                  user={user}
                  project={project}
                ></Cardtwo>
                // <CardComponent key={project.id} user={user} project={project}>
                //   <ButtonHolder>
                //     <Button
                //       type='button'
                //       maxWidth='big'
                //       fontSize='medium'
                //       kind='delete'
                //       size='medium'
                //       onClick={() => {
                //         setDeleteOpen((o) => !o);
                //         toDelete = project.id;
                //       }}
                //       addCSS={CustomDeleteButtonCSS}
                //     >
                //       Delete
                //     </Button>
                //     <Button
                //       maxWidth='big'
                //       fontSize='medium'
                //       kind='edit'
                //       size='medium'
                //       onClick={() => {
                //         setOpen((o) => !o);
                //         toEdit = project.id;
                //       }}
                //     >
                //       Edit
                //     </Button>
                //   </ButtonHolder>
                // </CardComponent>
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
          <span>Edit</span>
          <button onClick={closeModal}>X</button>
        </HeaderContainer>

        <Sure>Do you want to edit this project ?</Sure>

        <ButtonContainer>
          <button onClick={closeModal}>Cancel</button>
          <button
            onClick={() => {
              projectToEdit(toEdit);
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
          <span>Delete</span>
          <button onClick={closeDeleteModal}>X</button>
        </HeaderContainer>

        <Sure>
          <p>Do you want to Delete this project ?</p>
        </Sure>

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
