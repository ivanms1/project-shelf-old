import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import useCurrentUser from '../useCurrentUser/useCurrentUser';

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

const tabs = {
  auth: [
    {
      title: 'Home',
      to: `/`,
      exact: true,
    },
    {
      title: 'Weekly',
      to: `/weekly`,
      exact: true,
    },
    {
      title: 'Submit Project',
      to: `/submit`,
      exact: true,
    },
    {
      title: 'ADMIN',
      to: `/admin`,
      exact: true,
    },
  ],
  notAuth: [
    {
      title: 'Register',
      to: `/register`,
      exact: true,
    },
    {
      title: 'Sign in',
      to: `/signin`,
      exact: true,
    },
  ],
};

function Header(props) {
  const hooks = useContext(Context);
  const { isAuthenticated } = hooks;

  const { data, loading, error } = useCurrentUser();
  const { currentUser } = data;

  if (loading === false && !error) {
    if (currentUser.role !== 'ADMIN') {
      const tabfilter = tabs.auth.filter((tab) => tab.title !== 'ADMIN');
      tabs.auth = tabfilter;
    }
  }

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
            {tabs.auth.map((tab) => (
              <li key={tab.title}>
                <StyledLink
                  activeClassName='current'
                  exact={tab.exact}
                  to={tab.to}
                >
                  {tab.title}
                </StyledLink>
              </li>
            ))}
            <li>
              <LogoutButton onClick={() => setModalIsOpen(true)}>
                Log out
              </LogoutButton>
            </li>
          </ul>
        ) : (
          <ul>
            {tabs.notAuth.map((tab) => (
              <li key={tab.title}>
                <StyledLink
                  activeClassName='current'
                  exact={tab.exact}
                  to={tab.to}
                >
                  {tab.title}
                </StyledLink>
              </li>
            ))}
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
