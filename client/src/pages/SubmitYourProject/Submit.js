import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import PopupModal from '../../components/PopupModal/PopupModal';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import SubmitForm from './SubmitForm';

import IMG_Social from '../../assets/social.png';

import { Main, Overlay, Container } from './style';
import { CustomYesButton } from '../../components/PopupModal/style';

function Submit(props) {
  const [afterSubmitModelIsOpen, setAfterSubmitModelIsOpen] = useState(false);
  const openAfterSubmitModelIsOpen = () => setAfterSubmitModelIsOpen(true);
  const closeAfterSubmitModelIsOpen = () => setAfterSubmitModelIsOpen(false);

  const history = useHistory();

  return (
    <Main>
      <Header />
      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>
          <SubmitForm onSuccess={openAfterSubmitModelIsOpen} />
        </Container>
      </Overlay>
      <PopupModal
        isOpen={afterSubmitModelIsOpen}
        onRequestClose={closeAfterSubmitModelIsOpen}
        onClick={() => {
          alert('sad');
        }}
        title='Project Submitted'
      >
        <div className='imgContainer'>
          <img src={IMG_Social} alt={IMG_Social}></img>
        </div>

        <Button addCSS={CustomYesButton} onClick={() => history.push('/')}>
          Ok
        </Button>
      </PopupModal>
    </Main>
  );
}

export default Submit;
