import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import { ReactComponent as Cog } from '../../assets/cog.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as Home } from '../../assets/home.svg';

import useCurrentUser from '../useCurrentUser/useCurrentUser';

import {
  ReactModalStyled,
  Container,
  Nav,
  StyledLink,
  ButtonContainer,
} from './style';

import { HeaderContainer, Body } from '../PopupModal/style';

import DropDownApp from '../DropDown/DropDownApp';
import MobileMenu from '../MobileMenu/Mobilemenu';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

import { Context } from '../../Context/AppContext';

function Header(props) {
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    ],
    authandDropdown: [
      {
        title: 'ADMIN',
        onClick: () => history.push('/admin'),
        leftIcon: <Bell />,
      },
      {
        title: 'Log Out',
        onClick: () => setModalIsOpen(true),
        leftIcon: <Cog />,
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
  const hooks = useContext(Context);
  const { isAuthenticated } = hooks;

  const { data, loading, error } = useCurrentUser();
  const { currentUser } = data;

  if (!isAuthenticated) {
    return null;
  } else {
    if (loading === false && !error) {
      if (currentUser.role !== 'ADMIN') {
        const tabfilter = tabs.auth.filter((tab) => tab.title !== 'ADMIN');
        const tabfilter1 = tabs.authandDropdown.filter(
          (tab) => tab.title !== 'ADMIN'
        );
        tabs.authandDropdown = tabfilter1;
        tabs.auth = tabfilter;
      }
      tabs.authandDropdown.unshift({
        title:
          currentUser.name.toUpperCase() +
          ' ' +
          currentUser.lastName.toUpperCase(),
        onClick: () => history.push('/home'),
        leftIcon: <Home />,
      });
    }
  }

  const contentStyle = {
    background: '#f7f8fc',
    width: '80%',
    border: 'none',
  };

  const PopUpContainer = React.forwardRef((props, ref) => {
    return (
      <Popup
        modal
        overlayStyle={{ background: '#f7f8fc' }}
        contentStyle={contentStyle}
        closeOnDocumentClick={false}
        trigger={(open) => <BurgerIcon open={open} />}
      >
        {(close) => <MobileMenu close={close} />}
      </Popup>
    );
  });

  Modal.setAppElement('#root');

  return (
    <Container>
      <PopUpContainer />

      <Nav>
        <div>
          <li>
            <StyledLink className='logo' to='/'>
              ProjectShelf
              <small>
                <sub>beta</sub>
              </small>
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
      {isAuthenticated && (
        <DropDownApp list={tabs.authandDropdown}></DropDownApp>
      )}
    </Container>
  );
}

export default Header;
