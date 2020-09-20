import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import {
  ReactModalStyled,
  Container,
  Nav,
  StyledLink,
  LogoutButton,
  ButtonContainer,
} from './style';

import { HeaderContainer, Body } from '../PopupModal/style';

import MobileMenu from '../MobileMenu/Mobilemenu';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

import { Context } from '../../Context/AppContext';

function Header(props) {
  const hooks = useContext(Context);
  const { isAuthenticated } = hooks;

  const contentStyle = {
    background: 'rgba(255,255,255,0)',
    width: '80%',
    border: 'none',
  };

  const PopUpContainer = React.forwardRef((props, ref) => {
    return (
      <Popup
        modal
        overlayStyle={{ background: '#fce4ec' }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <MobileMenu close={close} />}
      </Popup>
    );
  });

  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  Modal.setAppElement('#root');

  return (
    <Container>
      <PopUpContainer />

      <Nav>
        <div>
          <li>
            <StyledLink className='logo' to='/'>
              ProjectShelf
            </StyledLink>
          </li>
        </div>

        {isAuthenticated ? (
          <ul>
            <li>
              <StyledLink exact activeClassName='current' to='/'>
                Home
              </StyledLink>
            </li>

            <li>
              <StyledLink activeClassName='current' to='/weekly'>
                Weekly Projects
              </StyledLink>
            </li>

            <li>
              <StyledLink activeClassName='current' to='/submit'>
                Submit your Projects
              </StyledLink>
            </li>

            <li>
              <LogoutButton onClick={() => setModalIsOpen(true)}>
                Log out
              </LogoutButton>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <StyledLink activeClassName='current' to='/register'>
                Register
              </StyledLink>
            </li>

            <li>
              <StyledLink activeClassName='current' to='/signin'>
                Sign in
              </StyledLink>
            </li>
          </ul>
        )}
      </Nav>

      <ReactModalStyled
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
      >
        <HeaderContainer>
          <span>Log Out</span>

          <button onClick={() => setModalIsOpen(false)}>X</button>
        </HeaderContainer>

        <Body>
          <p>Are you sure ?</p>
        </Body>

        <ButtonContainer>
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          <button
            onClick={() => {
              localStorage.setItem('userToken', '');
              setModalIsOpen(false);
              history.push('/signin');
            }}
          >
            Confirm
          </button>
        </ButtonContainer>
      </ReactModalStyled>
    </Container>
  );
}

export default Header;
