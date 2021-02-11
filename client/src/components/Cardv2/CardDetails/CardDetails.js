import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Loader from '../../Loader/Loader';
import PopupModal from '../../PopupModal/PopupModal';

import { getCurrentDate } from '../../..//helpers/dateConverter';

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

const CardDetails = () => {
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
    closeDeleteModal();
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

  const { project } = data ?? {};

  return (
    <Main>
      <Header />
      <Container>
        <BackButton>
          <Link to='/'>Home</Link> /{' '}
          <span className='projectTitle'>{project.title}</span>
        </BackButton>

        <div className='wrapper'>
          <DetailsContainer>
            <div className='imgUserDetails'>
              <ImgContainerOuter status={project.isApproved}>
                <Zoom wrapStyle={{ display: 'inline-block' }} zoomZindex='10px'>
                  <img
                    src={project.preview}
                    alt={project.preview}
                    width='100%'
                    height='100%'
                    style={{ objectFit: 'contain' }}
                  />
                </Zoom>
              </ImgContainerOuter>

              <UserDetails>
                <span className='fullName'>
                  {project.author.name} {project.author.lastName}
                </span>

                <Status status={project.author.role}>
                  {project.author.role}
                </Status>
              </UserDetails>
            </div>

            <AllDetails>
              <div>
                <span className='fullName'>{project.title}</span>
                <span className='date'>
                  {getCurrentDate(project.createdAt)}
                </span>

                <div className='linksContainer'>
                  <span>
                    <Github />{' '}
                    <a
                      href={project.repoLink}
                      href={project.siteLink}
                      target='_blank'
                      rel='noopener noreferrer'
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
                    <a
                      href={project.siteLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Live Site
                    </a>
                  </span>
                </div>

                <div className='description'>{project.description}</div>
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
          deleteUserProject(project.id);
        }}
      />

      <PopupModal
        isOpen={editModelIsOpen}
        onRequestClose={closeEditModal}
        onClick={() => {
          editUserProject(project.id);
        }}
      />
    </Main>
  );
};

export default CardDetails;
