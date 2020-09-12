import React from 'react';
import ReactToolTip from 'react-tooltip';
import Zoom from 'react-medium-image-zoom';

import Active from '../Active/Active';

import {
  CardOuter,
  CardInner,
  HeaderCollection,
  Links,
  Profile,
} from './style';

import Rick from '../../assets/rick.png';

const EMAIL_STRING = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=';

function Card({ children, user, project }) {
  return (
    <CardOuter>
      <ReactToolTip className='notActivated' id='notActivated'>
        <span>Not Activated</span>
      </ReactToolTip>

      <div data-tip data-for='notActivated'>
        <div className='activeContainer'>
          <Active />
        </div>
      </div>

      <CardInner>
        <HeaderCollection>
          <span>{project.title}</span>
        </HeaderCollection>

        <Links>
          <a target='_blank' rel='noopener noreferrer' href={project.siteLink}>
            Live Link
          </a>
          <a target='_blank' rel='noopener noreferrer' href={project.repoLink}>
            Repo Link
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={EMAIL_STRING + (user.email || user.author.email)}
          >
            Contact
          </a>
        </Links>

        <div className='imgContainer'>
          <Zoom wrapStyle={{ display: 'block' }}>
            <img
              alt={project.preview}
              src={project.preview}
              width='100%'
              height='100%'
            ></img>
          </Zoom>
        </div>

        <Profile>
          <div className='profileContainer'>
            <img
              alt={project.preview}
              src={Rick}
              width='100%'
              height='100%'
            ></img>
          </div>

          <div className='profileDetails'>
            <p>
              {user.name || user.author.name}{' '}
              {user.lastName || user.author.lastName}
            </p>

            <p>4th weekly project</p>
          </div>
        </Profile>
        <p className='date'>Published Date : Sept 08, 2020</p>

        <p className='description'>{project.description}</p>

        {children}
      </CardInner>
    </CardOuter>
  );
}

export default Card;
