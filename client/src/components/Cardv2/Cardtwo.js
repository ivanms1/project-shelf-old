import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

import useCurrentUser from '../useCurrentUser/useCurrentUser';

import { ReactComponent as Star } from './../../assets/Star.svg';
import { ReactComponent as StarFill } from './../../assets/Star-Fill.svg';
import { ReactComponent as Spinner } from './../../assets/spinner.svg';

import { getCurrentDate } from '../../helpers/dateConverter';

import { Main, CardContainerInner, ProjectDetails, ViewDetails } from './style';

const MUTATION_REACT_TO_PROJECT = loader('./mutationReactToProject.graphql');

const getAction = (project, currentUser) => {
  return project.likes.some((user) => user.id === currentUser.id)
    ? 'DISLIKE'
    : 'LIKE';
};

export const Cardtwo = ({ user, project, children }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const history = useHistory();

  const { currentUser } = useCurrentUser();

  const getVariables = () => {
    return {
      variables: {
        input: {
          projectId: project.id,
          userId: currentUser.id,
          action: getAction(project, currentUser),
        },
      },
    };
  };

  const [reactToProject] = useMutation(
    MUTATION_REACT_TO_PROJECT,
    getVariables()
  );

  return (
    <Main>
      <button onClick={reactToProject} className='starContainer'>
        {getAction(project, currentUser) === 'LIKE' ? <Star /> : <StarFill />}
      </button>

      <CardContainerInner isApproved={project.isApproved}>
        <div className='imgContainer'>
          {!imgLoaded ? <Spinner /> : null}
          <img
            src={project.preview}
            alt={project.preview}
            loading='lazy'
            onLoad={() => setImgLoaded(true)}
          />
          <div className='overlay'>
            <div className='overlayContent'>
              <span>
                <Star />
              </span>
              <ViewDetails
                onClick={() => history.push(`/projectDetails/${project.id}`)}
              >
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
