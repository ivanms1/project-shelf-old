import React from 'react';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import Cardtwo from '../../components/Cardv2/Cardtwo';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Loader from '../../components/Loader/Loader';

import { Main, Container, SearchContainer, CardContainer } from './style';

const QUERY_WEEKLY_PROJECTS = loader('./queryGetProjects.graphql');

function Weekly() {
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
          <Search />
        </SearchContainer>

        <CardContainer>
          {!projects.length ? (
            <p className='noproject'>You dont have any projects to ShowCase.</p>
          ) : (
            <>
              {projects.map(
                (project) =>
                  project?.isApproved && (
                    <Cardtwo key={project.id} project={project} />
                  )
              )}
            </>
          )}
        </CardContainer>
      </Container>
    </Main>
  );
}

export default Weekly;
