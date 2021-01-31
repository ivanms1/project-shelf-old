import React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import Button from '../../Button/Button';
import Header from '../../Header/Header';

import { ReactComponent as Github } from '../../../assets/github.svg';

import {
  Main,
  Container,
  ImgContainerOuter,
  DetailsContainer,
  UserDetails,
  Status,
  AllDetails,
  ButtonContainer,
  CustomDeleteButtonCSS,
} from './style';

const GET_PROJECT_QUERY = loader('./queryGetProject.graphql');

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
  const { projectId } = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, {
    variables: {
      id: projectId,
    },
  });

  if (loading) {
    return <p>loading</p>;
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
              <span className='date'>{getCurrentDate(Project.createdAt)}</span>

              <div className='linksContainer'>
                <span>
                  <Github /> <a href={Project.repoLink}>Github</a>
                </span>
                <span>
                  <Github />
                  <a>Contact</a>
                </span>
                <span>
                  <Github />
                  <a href={Project.siteLink}></a>
                  Live Site
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
                onClick={() => {}}
                addCSS={CustomDeleteButtonCSS}
              >
                Delete
              </Button>
              <Button
                maxWidth='small'
                fontSize='medium'
                kind='edit'
                size='small'
                onClick={() => {}}
                addCSS={CustomDeleteButtonCSS}
              >
                Edit
              </Button>
            </ButtonContainer>
          </AllDetails>
        </DetailsContainer>
      </Container>
    </Main>
  );
};
