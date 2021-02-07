import React from 'react';
import Modal from 'react-modal';

import Button from '../Button/Button';

import {
  StyledModal,
  ButtonContainer,
  CustomNoButton,
  CustomYesButton,
} from './style';

Modal.setAppElement('#root');

export const PopupModal = ({
  children,
  isOpen,
  onRequestClose,
  title = 'Are you sure ?',
  onClick = () => {},
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
    >
      {children ? null : (
        <div className='header'>
          <button onClick={onRequestClose}>X</button>
        </div>
      )}

      <p className='body'>{title}</p>

      {children ? (
        children
      ) : (
        <ButtonContainer>
          <Button addCSS={CustomNoButton} onClick={onRequestClose}>
            No
          </Button>
          <Button addCSS={CustomYesButton} onClick={onClick}>
            Yes
          </Button>
        </ButtonContainer>
      )}
    </StyledModal>
  );
};
