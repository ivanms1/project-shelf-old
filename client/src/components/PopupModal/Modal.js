import React from 'react';
import Modal from 'react-modal';

import Button from '../Button/Button';

import { ReactComponent as LogoutModalSVG } from '../../assets/Logout_Modal.svg';
import { ReactComponent as DeleteModalSVG } from '../../assets/Delete_Modal.svg';
import { ReactComponent as EditModalSVG } from '../../assets/Edit_Modal.svg';

import {
  StyledModal,
  CloseButton,
  Body,
  Description,
  ButtonContainer,
  CustomNoButton,
  CustomYesButton,
} from './ModalStyle';

Modal.setAppElement('#root');

const Modal_Messages = {
  logout: {
    title: 'Logging Out ?',
    message: 'Are you sure you want to Logout ?',
    button_text_YES: 'YES',
    button_text_NO: 'NO',
  },
  delete: {
    title: 'Delete Project ?',
    message: 'Are you sure you want to Delete it ?',
    button_text_YES: 'DELETE',
    button_text_NO: 'CANCEL',
  },
  edit: {
    title: 'Edit the Project ?',
    message: 'Are you sure you want to Edit it ?',
    button_text_YES: 'EDIT',
    button_text_NO: 'CANCEL',
  },
};

const getSvg = (svgName) => {
  switch (svgName) {
    case 'logout':
      return <LogoutModalSVG />;
    case 'delete':
      return <DeleteModalSVG />;
    case 'edit':
      return <EditModalSVG />;
    default:
      return null;
  }
};

function ModalStyle({
  isOpen,
  onRequestClose,
  type = 'logout',
  onClick = () => {},
}) {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
    >
      <Body>
        <CloseButton>
          <button onClick={onRequestClose}>X</button>
        </CloseButton>
        {getSvg(type)}
        <Description>
          <span>{Modal_Messages[type].title}</span>
          <span>{Modal_Messages[type].message}</span>
        </Description>

        <ButtonContainer>
          <Button
            border={type}
            addCSS={CustomNoButton}
            onClick={onRequestClose}
          >
            {Modal_Messages[type].button_text_NO}
          </Button>

          <Button kind={type} addCSS={CustomYesButton} onClick={onClick}>
            {Modal_Messages[type].button_text_YES}
          </Button>
        </ButtonContainer>
      </Body>
    </StyledModal>
  );
}

export default ModalStyle;
