import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';

import Header from '../../components/Header/Header';
import {
  Container,
  Approval,
  CardContainer,
  Card,
  ImageContainer,
  Description,
  ActiveContainer
} from './style';

import Button from '../../components/Button/Button';
import Active from '../../components/Active/Active';
import Spinner from '../../components/Spinner/Spinner';

const GET_USER_QUERY = loader('./queryUser.graphql');
const DELETE_USER_PROJECT = loader('./mutationDeleteProject.graphql');



function Home() {
  const [loadingState, setLoadingState] = useState(false);
  const userToken = localStorage.getItem('userToken');
  const history = useHistory();

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
      skip: !userToken,
    },
  });

  //since data error loading cannot be used multiple times for multiple queries or mutation we rename them
  const [deleteProject, { data: dataR, error: errorR, loading: loadingR }] = useMutation(DELETE_USER_PROJECT);

  console.log(loadingR);

  function redirect(path) {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
      return (window.location.href = path);
    }, 500);
  }


  function deleteuserProject(projectId) {
    if (window.confirm('Are you sure you want to delete it ?')) {
      deleteProject({ variables: { projectId: projectId } });
      history.go();
    }
    else {
      return;
    }
  }

  if (!userToken) {
    return <Redirect to='register' />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Please try again later</p>;
  }

  const { user } = data;
  console.log(user);
  return (
    <div>
      <Header />
      <Container>
        <Approval>
          <p style={{ textAlign: 'center' }}>
            Welcome {user.name} {user.lastName}
          </p>
          <ActiveContainer>
            <div>
              <Active />
              <span className='text'>Not Approved yet</span>
            </div>
            <div className='approved'>
              <Active active={true} />
              <span className='text'>Approved</span>
            </div>
          </ActiveContainer>
        </Approval>

        <CardContainer>
          {user.projects.length === 0 ?
            <p className='noproject'>You dont have any projects to ShowCase.</p>
            :
            <>
              {
                user.projects.map((users) => (
                  <Card key={users.id}>
                    <Active active={users.isApproved} />

                    <ImageContainer>
                      <img alt={users.name} src={users.preview}></img>
                    </ImageContainer>

                    <Description>
                      <span>{users.title}</span>
                      <p>
                        <span className='first'>Link to the Repo </span>
                        <a href={users.repoLink} style={{ textDecoration: 'none' }}>
                          <span className='second'>: {users.siteLink} </span>
                        </a>
                      </p>

                      <p>
                        <span className='first'>Live Link </span>
                        <a href={users.siteLink} style={{ textDecoration: 'none' }}>
                          <span className='second'>: {users.siteLink} </span>
                        </a>
                      </p>

                      <p>
                        <span className='first'>Email </span>
                        <span className='second'>: {user.email}</span>
                      </p>

                      <p>
                        <span className='first'>Weekly Category </span>
                        <span className='second'>: 4th weekly project</span>
                      </p>

                      <p>
                        <span className='first'>Name </span>
                        <span className='second'>
                          : {user.name} {user.lastName}
                        </span>
                      </p>
                      <p className='desc'>{users.description}</p>

                      <Button
                        loading={loadingState}
                        bgColor='#0070f3'
                        margin='20px 0 0 0'
                        onClick={() => redirect(users.repoLink)}
                      >
                        Visit the repository
                      </Button>

                      <Button
                        bgColor='#ED2C49'
                        margin='20px 0 0 0'
                        onClick={() => {
                          deleteuserProject(users.id);
                        }
                        }
                      >
                        Delete the Project
                    </Button>
                    </Description>
                  </Card>
                ))
              }
            </>
          }

        </CardContainer>
      </Container>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
