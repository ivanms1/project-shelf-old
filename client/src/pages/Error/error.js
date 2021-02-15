import React from 'react';

import error from '../../assets/error.png';

import { Container } from './style';

function Error() {
  return (
    <Container>
      <h1>Can't find the page you requested.</h1>
      <div>
        <img alt={error} src={error}></img>
      </div>
    </Container>
  );
}

export default Error;
