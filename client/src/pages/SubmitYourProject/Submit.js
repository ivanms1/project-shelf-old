import React, { useState } from 'react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { PopupModal } from '../../components/PopupModal/PopupModal';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/Button/Button';
import SubmitForm from './SubmitForm';

import IMG_Social from '../../assets/social.png';

import { Main, Overlay, Container } from './style';
import { CustomYesButton } from '../../components/PopupModal/style';

const userToken = localStorage.getItem('userToken');

const CREATE_PROJECT_MUTATION = loader('./mutationCreateProject.graphql');

let img = IMG_Social;

function Submit(props) {
  const [afterSubmitModelIsOpen, setAfterSubmitModelIsOpen] = useState(false);
  const openAfterSubmitModelIsOpen = () => setAfterSubmitModelIsOpen(true);
  const closeAfterSubmitModelIsOpen = () => setAfterSubmitModelIsOpen(false);

  const history = useHistory();

  const [sendInputs, { error }] = useMutation(CREATE_PROJECT_MUTATION);

  if (error) {
    return <Loader />;
  }

  async function onSubmit(data) {
    try {
      const res = await sendInputs({
        variables: {
          input: {
            authorId: userToken,
            preview: data.preview,
            title: data.title,
            siteLink: data.siteLink,
            repoLink: data.repoLink,
            description: data.description,
          },
        },
      });
      console.log(res);
      img = data.preview;
      openAfterSubmitModelIsOpen();
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  return (
    <Main>
      <Header />

      <Overlay>
        <Container>
          <p>
            <span>ShowCase them </span>
            <span>so that people can learn from each other.</span>
          </p>

          <SubmitForm onSubmit={onSubmit} />
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
          <img src={img} alt={img}></img>
        </div>

        <Button addCSS={CustomYesButton} onClick={() => history.push('/')}>
          Ok
        </Button>
      </PopupModal>
    </Main>
  );
}

export default Submit;
