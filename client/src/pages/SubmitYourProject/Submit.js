import React from 'react';

import Header from '../../components/Header/Header';
import SubmitForm from './SubmitForm';

import { Main, Overlay, Container } from './style';

function Submit() {
  return (
    <Main>
      <Header />
      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>
          <SubmitForm />
        </Container>
      </Overlay>
    </Main>
  );
}

export default Submit;
