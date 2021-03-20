import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './style';

function Logout() {
  localStorage.setItem('userToken', '');

  const history = useHistory();
  history.push('/login');

  return <Container />;
}

export default Logout;
