import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';

import useCurrentUser from '../useCurrentUser/useCurrentUser';

import { ReactComponent as Star } from './../../assets/Star.svg';
import { ReactComponent as StarFill } from './../../assets/Star-Fill.svg';
import { ReactComponent as Spinner } from './../../assets/spinner.svg';

import { getCurrentDate } from '../../helpers/dateConverter';

import { Main, CardContainerInner, ProjectDetails, ViewDetails } from './style';

const MUTATION_REACT_TO_PROJECT = loader('./mutationReactToProject.graphql');
const MUTATION_FAVORITE_PROJECT = loader('./mutationFavoriteProject.graphql');

const getActionLikes = (project, currentUser) => {
  return project?.likes.some((user) => user?.id === currentUser?.id)
    ? 'DISLIKE'
    : 'LIKE';
};

const getActionFavorite = (project, currentUser) => {
  return currentUser?.favoriteProjects?.some(
    (favProject) => favProject.id === project.id
  )
    ? 'UNDO'
    : 'FAVORITE';
};

const Cardtwo = ({ project }) => {
  const [imgLoaded, setImgLoaded] = useState(true);

  const { currentUser } = useCurrentUser();

  const getVariablesLikes = () => {
    return {
      variables: {
        input: {
          projectId: project?.id,
          userId: currentUser?.id,
          action: getActionLikes(project, currentUser),
        },
      },
    };
  };

  const getVariablesFavorite = () => {
    return {
      variables: {
        input: {
          projectId: project?.id,
          userId: currentUser?.id,
          action: getActionFavorite(project, currentUser),
        },
      },
    };
  };

  const [reactToProject] = useMutation(
    MUTATION_REACT_TO_PROJECT,
    getVariablesLikes()
  );

  const [favoriteProject, { loading }] = useMutation(
    MUTATION_FAVORITE_PROJECT,
    getVariablesFavorite()
  );

  const favoriteClickHandler = async () => {
    try {
      const action = getActionFavorite(project, currentUser);
      const msg =
        action === 'FAVORITE' ? `Added to favorites` : `Removed from favorites`;
      await favoriteProject();
      toast.success(msg);
    } catch (error) {
      toast.error('Oops, too fast');
    }
  };

  return (
    <Main>
      <button onClick={reactToProject} className='starContainer'>
        {getActionLikes(project, currentUser) === 'LIKE' ? (
          <Star />
        ) : (
          <StarFill />
        )}
      </button>

      <CardContainerInner isApproved={project.isApproved}>
        <div className='imgContainer'>
          {!imgLoaded ? (
            <Spinner />
          ) : (
            <img
              src={project.preview}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgLoaded(false)}
              alt={project.title}
            />
          )}

          <div className='overlay'>
            <div className='overlayContent'>
              <button disabled={loading} onClick={favoriteClickHandler}>
                {getActionFavorite(project, currentUser) === 'FAVORITE' ? (
                  <Star />
                ) : (
                  <StarFill />
                )}
              </button>
              <ViewDetails to={`/projectDetails/${project.id}`}>
                View Details
              </ViewDetails>
            </div>
          </div>
        </div>
      </CardContainerInner>
      <ProjectDetails>
        <span className='userName'>{project.title}</span>
        <span className='submissionDate'>
          {getCurrentDate(project.createdAt)}
        </span>
      </ProjectDetails>
    </Main>
  );
};

export default Cardtwo;
