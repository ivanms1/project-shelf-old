import React, { useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import Zoom from 'react-medium-image-zoom';

import Button from '../../Button/Button';
import Header from '../../Header/Header';
import Loader from '../../Loader/Loader';
import PopupModal from '../../PopupModal/PopupModal';

import useCurrentUser from '../../useCurrentUser/useCurrentUser';

import { getCurrentDate } from '../../..//helpers/dateConverter';

import { ReactComponent as Spinner } from '../../../assets/spinner.svg';
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

import 'react-medium-image-zoom/dist/styles.css';

const GET_PROJECT_QUERY = loader('./queryGetProject.graphql');
const DELETE_USER_PROJECT = loader('./mutationDeleteProject.graphql');

const CardDetails = () => {
  const [imgLoaded, setImgLoaded] = useState(true);

  const [editModelIsOpen, setEditModelIsOpen] = useState(false);
  const openEditModal = () => setEditModelIsOpen(true);
  const closeEditModal = () => setEditModelIsOpen(false);

  const [deleteModelIsOpen, setDeleteModelIsOpen] = useState(false);
  const openDeleteModal = () => setDeleteModelIsOpen(true);
  const closeDeleteModal = () => setDeleteModelIsOpen(false);

  const { projectId } = useParams();
  const history = useHistory();
  const { currentUser } = useCurrentUser();

  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: {
      id: projectId,
    },
  });

  const [deleteProject] = useMutation(DELETE_USER_PROJECT, {
    update(cache, { data: { deleteProject } }) {
      cache.modify({
        id: cache.identify(currentUser),
        fields: {
          projects(existingProjects, { readField }) {
            return existingProjects.filter(
              (p) => readField('id', p) !== deleteProject
            );
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
    return <Loader />;
  }

  const { project } = data;

  return (
    <Main>
      <Header />
      <Container>
        {project && (
          <>
            <BackButton>
              <Link to='/'>Home</Link> /{' '}
              <span className='projectTitle'>{project?.title}</span>
            </BackButton>

            <div className='wrapper'>
              <DetailsContainer>
                <div className='imgUserDetails'>
                  <ImgContainerOuter status={project?.isApproved}>
                    {!imgLoaded ? (
                      <Spinner />
                    ) : (
                      <Zoom
                        wrapStyle={{ display: 'inline-block' }}
                        zoomZindex='10px'
                      >
                        <img
                          src={project?.preview}
                          alt={project.preview}
                          onLoad={() => setImgLoaded(true)}
                          onError={() => setImgLoaded(false)}
                          width='100%'
                          height='100%'
                          style={{ objectFit: 'contain' }}
                        />
                      </Zoom>
                    )}
                  </ImgContainerOuter>

                  <UserDetails>
                    <span className='fullName'>
                      {project?.author.name} {project?.author.lastName}
                    </span>

                    <Status status={project?.author.role}>
                      {project?.author.role}
                    </Status>
                  </UserDetails>
                </div>

                <AllDetails>
                  <div>
                    <span className='fullName'>{project?.title}</span>
                    <span className='date'>
                      {getCurrentDate(project?.createdAt)}
                    </span>

                    <div className='linksContainer'>
                      <span>
                        <Github />{' '}
                        <a
                          href={project.repoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Github
                        </a>
                      </span>
                      <span>
                        <Email />
                        <a href={'mailto:' + project?.author.email}>Contact</a>
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

                    <div className='description'>{project?.description}</div>
                  </div>

                  {(currentUser?.email === project?.author.email ||
                    currentUser?.role === 'ADMIN') && (
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
                  )}
                </AllDetails>
              </DetailsContainer>
            </div>
          </>
        )}

        {!project && <p>Project does not exist.</p>}
      </Container>

      <PopupModal
        isOpen={deleteModelIsOpen}
        onRequestClose={closeDeleteModal}
        onClick={() => {
          deleteUserProject(project?.id);
        }}
      />

      <PopupModal
        isOpen={editModelIsOpen}
        onRequestClose={closeEditModal}
        onClick={() => {
          editUserProject(project?.id);
        }}
      />
    </Main>
  );
};

export default CardDetails;
