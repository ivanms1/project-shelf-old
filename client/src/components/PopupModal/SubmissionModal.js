import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button/Button';

import { ReactComponent as BeerSVG } from '../../assets/beer.svg';

import {
  StyledModal,
  Body,
  Title,
  ImgContainer,
  Message,
  CustomDONE,
} from './SubmissionStyle';

const SubmissionModal = ({ isOpen, onRequestClose }) => {
  const history = useHistory();

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
    >
      <Body>
        <Title>Project submitted !</Title>
        <ImgContainer>
          <BeerSVG />
        </ImgContainer>
        <Message>
          Now take a beer while the admins approve this project.
        </Message>
        <Button
          addCSS={CustomDONE}
          onClick={() => {
            onRequestClose();
            history.push('/');
          }}
        >
          Done
        </Button>
      </Body>
    </StyledModal>
  );
};

export default SubmissionModal;
