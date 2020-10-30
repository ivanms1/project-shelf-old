import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import CardComponent from '../../components/Card/Card';
import Header from '../../components/Header/Header';

import { Main, Container, SearchContainer, CardContainer } from './style';

import Loader from '../../components/Loader/Loader';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

//eslint-disable-next-line
function redirect(path) {
  return (window.location.href = path);
}

function Weekly(props) {
  //eslint-disable-next-line
  const [loadingState, setLoadingState] = useState(false);
  const { data, loading, error } = useQuery(QUERY_WEEKLY_PROJECTS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return JSON.stringify(error, null, 2);
  }

  const { projects } = data;

  return (
    <Main>
      <Header />

      <Container>
        <SearchContainer>
          <p>4th week project : 'MERN Stack'</p>

          <select>
            <option>MERN stack</option>
            <option>API</option>
            <option>Quiz App</option>
          </select>
        </SearchContainer>

        <CardContainer>
          {projects.length > 0 ? (
            <>
              {projects.map((project) => (
                <CardComponent
                  key={project.id}
                  user={project}
                  project={project}
                ></CardComponent>
              ))}
            </>
          ) : (
            <p className='noproject'>no one has ever posted a project yet.</p>
          )}
        </CardContainer>
      </Container>
    </Main>
  );
}

export default Weekly;
