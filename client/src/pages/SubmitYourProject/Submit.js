import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Spinner from '../../components/Spinner/Spinner';
import SubmitForm from './SubmitForm';

import { Container } from './style';

const userToken = localStorage.getItem('userToken');

const GET_USER_QUERY = loader('./queryGetUser.graphql');
const CREATE_PROJECT_MUTATION = loader('./mutationCreateProject.graphql');


function Submit(props) {
  const { loading, data } = useQuery(GET_USER_QUERY, {
    variables: {
      id: userToken,
    },
  });

  const history = useHistory();

  const [sendInputs, { error }] = useMutation(CREATE_PROJECT_MUTATION);

  if (loading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <Spinner />;
  }

  const { user } = data;

  //creating projects
  async function onSubmit(data) {
    try {
      await sendInputs({
        variables: {
          input: {
            authorId: userToken,
            preview: 'https://i.ibb.co/L5N2MBy/item-5.jpg',
            title: data.title,
            siteLink: data.siteLink,
            repoLink: data.repoLink,
            description: data.description,
          },
        },
      });
      alert('success');
      history.push('/');
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: '#F7F8FC' }}>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>

          {user && <SubmitForm user={user} onSubmit={onSubmit} />}
        </Container>
      </div>
    </div>
  );
}

export default Submit;
