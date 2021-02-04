import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';

import useCurrentUser from '../useCurrentUser/useCurrentUser';

import { ReactComponent as Star } from './../../assets/Star.svg';
import { ReactComponent as StarFill } from './../../assets/Star-Fill.svg';
import { ReactComponent as Spinner } from './../../assets/spinner.svg';

import { getCurrentDate } from '../../helpers/dateConverter';

import {
  Main,
  CardContainerOutter,
  CardContainerInner,
  ProjectDetails,
  ViewDetails,
} from './style';

const MUTATION_REACT_TO_PROJECT = loader('./mutationReactToProject.graphql');

export const Cardtwo = ({ user, project, children }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const { currentUser } = useCurrentUser();

  const getAction = () => {
    return project.likes.some((user) => user.id === currentUser.id)
      ? 'DISLIKE'
      : 'LIKE';
  };

  const getVariables = () => {
    return {
      variables: {
        input: {
          projectId: project.id,
          userId: currentUser.id,
          action: getAction(),
        },
      },
    };
  };

  const [reactToProject] = useMutation(
    MUTATION_REACT_TO_PROJECT,
    getVariables()
  );

  const history = useHistory();

  return (
    <Main>
      <CardContainerOutter isApproved={project.isApproved}>
        <button onClick={reactToProject} className='starContainer'>
          {getAction() === 'LIKE' ? <Star /> : <StarFill />}
        </button>

        <CardContainerInner>
          {!imgLoaded ? <Spinner /> : null}
          <div className='imgContainer'>
            <img
              src={project.preview}
              onLoad={() => setImgLoaded(true)}
              alt={project.title}
            />
            {imgLoaded && (
              <div className='overlay'>
                <div className='overlayContent'>
                  <span>
                    <Star />
                  </span>
                  <ViewDetails
                    onClick={() =>
                      history.push(`/projectDetails/${project.id}`)
                    }
                  >
                    View Details
                  </ViewDetails>
                </div>
              </div>
            )}
          </div>
        </CardContainerInner>
      </CardContainerOutter>

      <ProjectDetails>
        <span className='userName'>{project.title}</span>
        <span className='submissionDate'>
          {getCurrentDate(project.createdAt)}
        </span>
      </ProjectDetails>
    </Main>
  );
};
