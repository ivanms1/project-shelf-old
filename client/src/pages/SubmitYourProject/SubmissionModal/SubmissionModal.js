import React from 'react';

import Button from '../../../components/Button/Button';

import { ReactComponent as BeerSVG } from '../../../assets/beer.svg';

import {
  StyledModal,
  Body,
  Title,
  ImgContainer,
  Message,
  CustomDONE,
} from './style';

const SubmissionModal = ({ isOpen, onRequestClose }) => {
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
        <Button addCSS={CustomDONE} onClick={onRequestClose}>
          Done
        </Button>
      </Body>
    </StyledModal>
  );
};

export default SubmissionModal;
