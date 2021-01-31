import React from 'react';
import { useParams } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import Header from '../../Header/Header';

import { Main, Container, DetailsContainer, UserDetails } from './style';

const GET_PROJECT_QUERY = loader('./queryGetProject.graphql');

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
            <div className='imgContainerOuter'>
              <div className='imgContainerInner'>
                <img src={Project.preview} />
              </div>
            </div>

            <UserDetails>
              <span>
                {Project.author.name} {Project.author.lastName}
              </span>
              <span>{Project.createdAt}</span>
            </UserDetails>
          </div>
          <div className='allDetails'>
            <div></div>
          </div>
        </DetailsContainer>
      </Container>
    </Main>
  );
};
