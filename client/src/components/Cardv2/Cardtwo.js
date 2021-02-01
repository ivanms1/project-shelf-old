import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Star } from './../../assets/Star.svg';

import {
  Main,
  CardContainerOutter,
  CardContainerInner,
  ProjectDetails,
  ViewDetails,
} from './style';

const getCurrentDate = (createdDate) => {
  const dateOptions = {
    year: 'numeric',
  };
  const newDate = new Date(createdDate);
  return newDate.toLocaleDateString('en-us', dateOptions);
};

export const Cardtwo = ({ user, project, children }) => {
  const history = useHistory();

  return (
    <Main>
      <CardContainerOutter isApproved={project.isApproved}>
        <button
          onClick={() => {
            alert('added to favourties');
          }}
          className='starContainer'
        >
          <Star />
        </button>

        <CardContainerInner>
          <div className='imgContainer'>
            <img src={project.preview} alt={project.title} />
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
