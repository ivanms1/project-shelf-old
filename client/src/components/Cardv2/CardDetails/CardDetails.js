import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';

import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Loader from '../../Loader/Loader';
import { PopupModal } from '../../PopupModal/PopupModal';

import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as Email } from '../../../assets/email.svg';
import { ReactComponent as Web } from '../../../assets/web.svg';

import {
  Main,
  Container,
  BackButton,
  ImgContainerOuter,
  DetailsContainer,
  UserDetails,
  Status,
  AllDetails,
  ButtonContainer,
  CustomDeleteButtonCSS,
} from './style';

const GET_PROJECT_QUERY = loader('./queryGetProject.graphql');
const GET_USER_QUERY = loader('./queryUser.graphql');
const DELETE_USER_PROJECT = loader('./mutationDeleteProject.graphql');

const userToken = localStorage.getItem('userToken');

const getCurrentDate = (createdDate) => {
  const dateOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const newDate = new Date(createdDate);
  return newDate.toLocaleDateString('en-us', dateOptions);
};

export const CardDetails = ({}) => {
  const [editModelIsOpen, setEditModelIsOpen] = useState(false);
  const openEditModal = () => setEditModelIsOpen(true);
  const closeEditModal = () => setEditModelIsOpen(false);

  const [deleteModelIsOpen, setDeleteModelIsOpen] = useState(false);
  const openDeleteModal = () => setDeleteModelIsOpen(true);
  const closeDeleteModal = () => setDeleteModelIsOpen(false);

  const { projectId } = useParams();
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: {
      id: projectId,
    },
  });

  const { data: data1, loading: loading1 } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
      skip: !userToken,
    },
  });

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
    },
  });

  async function deleteUserProject(projectId) {
    await deleteProject({
      variables: {
        projectId: projectId,
      },
    });
    await closeDeleteModal;
    history.push('/');
  }

  function editUserProject(projectId) {
    setEditModelIsOpen(false);
    history.push(`/edit/${projectId}`);
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return console.log(error);
  }

  const { Project } = data ?? {};

  console.log(Project);

  return (
    <Main>
      <Header />
      <Container>
        <div className='wrapper'>
          <BackButton>
            <a onClick={() => history.push('/')}>Home</a> /{' '}
            <span className='projectTitle'>{Project.title}</span>
          </BackButton>

          <DetailsContainer>
            <div className='imgUserDetails'>
              <ImgContainerOuter status={Project.isApproved}>
                <div className='imgContainerInner'>
                  <img src={Project.preview} />
                </div>
              </ImgContainerOuter>

              <UserDetails>
                <span className='fullName'>
                  {Project.author.name} {Project.author.lastName}
                </span>

                <Status status={Project.author.role}>
                  {Project.author.role}
                </Status>
              </UserDetails>
            </div>

            <AllDetails>
              <div>
                <span className='fullName'>{Project.title}</span>
                <span className='date'>
                  {getCurrentDate(Project.createdAt)}
                </span>

                <div className='linksContainer'>
                  <span>
                    <Github />{' '}
                    <a
                      href={Project.repoLink}
                      href={Project.siteLink}
                      target='_blank'
                    >
                      Github
                    </a>
                  </span>
                  <span>
                    <Email />
                    <a>Contact</a>
                  </span>
                  <span>
                    <Web />
                    <a href={Project.siteLink} target='_blank'>
                      Live Site
                    </a>
                  </span>
                </div>

                <div className='description'>{Project.description}</div>
              </div>

              <ButtonContainer>
                <Button
                  maxWidth='big'
                  fontSize='medium'
                  kind='delete'
                  size='medium'
                  onClick={openDeleteModal}
                  addCSS={CustomDeleteButtonCSS}
                >
                  Delete
                </Button>

                <Button
                  maxWidth='small'
                  fontSize='medium'
                  kind='edit'
                  size='small'
                  onClick={openEditModal}
                  addCSS={CustomDeleteButtonCSS}
                >
                  Edit
                </Button>
              </ButtonContainer>
            </AllDetails>
          </DetailsContainer>
        </div>
      </Container>

      <PopupModal
        isOpen={deleteModelIsOpen}
        onRequestClose={closeDeleteModal}
        onClick={() => {
          deleteUserProject(Project.id);
        }}
      />

      <PopupModal
        isOpen={editModelIsOpen}
        onRequestClose={closeEditModal}
        onClick={() => {
          editUserProject(Project.id);
        }}
      />
    </Main>
  );
};
