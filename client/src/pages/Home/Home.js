import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  Container,
  Approval,
  CardContainer,
  Card,
  ImageContainer,
  Description,
} from './style';

import Preview from '../../assets/desktop-preview.jpg';
import Button from '../../components/Button/Button';
import Active from '../../components/Active/Active';
import Spinner from '../../components/Spinner/Spinner';

const GET_USER_QUERY = loader('./queryUser.graphql');

function redirect(path) {
  return window.location.href=path;

}

function Home(props) {
  const userToken = localStorage.getItem('userToken');

  const { data, loading, error } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error);
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
          <div >
            <div >
              <Active />
            </div>
            <span className='text'>Not Approved yet</span>
            <div>
              <Active active={true} />
            </div>
            <span className='text'>Approved</span>
          </div>
        </Approval>

        <CardContainer>
          {user.projects.map(users => (
           
            <Card key={users.id}>
              <Active active={users.isApproved} />

              <ImageContainer>
                <img alt={users.name} src={users.preview}></img>
              </ImageContainer>

              <Description>
                <span>{users.title}</span>
                <p>
                  <span className='first'>Live Link </span>
                  <a href={users.siteLink} style={{textDecoration:'none'}}> 
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
                  <span className='second'>: {user.name} {user.lastName}</span>
                </p>
                <p className='desc'>
                  {users.description}
                </p> 

                <Button bgColor='#ED2C49' margin='20px 0 0 0' onClick={()=> redirect(users.repoLink)}> 
                  Visit the repository
                
                </Button>
        
              </Description>
            </Card>

          ))}

          {/* <Card>
            <Active active={true} />

            <ImageContainer>
              <img alt='preview' src={Preview}></img>
            </ImageContainer>

            <Description>
              <span>Recipe App</span>
              <p>
                <span className='first'>Live Link </span>
                <span className='second'>: Live link here</span>
              </p>

              <p>
                <span className='first'>Contributors Name </span>
                <span className='second'>: John, Smigal</span>
              </p>

              <p>
                <span className='first'>Weekly Category </span>
                <span className='second'>: 4th weekly project</span>
              </p>

              <p>
                <span className='first'>Discord Name </span>
                <span className='second'>: Uzamaki21</span>
              </p>

              <p className='desc'>
                eg : this was built using MERN stacks. Used cloudaniary for
                image hosting. Used netlify for hosting in the live server.
              </p>

              <Button bgColor='#ED2C49' margin='20px 0 0 0'>
                Visit the repository
              </Button>
            </Description>
          </Card> */}
        </CardContainer>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
