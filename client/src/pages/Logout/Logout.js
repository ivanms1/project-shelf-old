import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './style';

function Logout({ modalStatus = true }) {
  localStorage.setItem('userToken', '');

  const history = useHistory();
  history.push('/signin');

  return <Container />;
}

export default Logout;
