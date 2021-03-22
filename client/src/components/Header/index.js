import React, { useContext, useState } from 'react';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';

import Popper from '../Popper';
import MobileMenu from '../MobileMenu';
import BurgerIcon from '../BurgerIcon';
import PopupModal from '../PopupModal';

import { Context } from '../../Context/AppContext';

import useCurrentUser from '../useCurrentUser';

import { ReactComponent as Git_Merge } from '../../assets/git-merge.svg';
import { ReactComponent as Bookmark } from '../../assets/bookmark.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as User } from '../../assets/user.svg';

import {
  Container,
  Nav,
  StyledLink,
  DropdownContainer,
  DropdownItem,
  Icon,
  DropDownText,
  MenuButton,
  VerticalLine,
} from './style';

const popperOptions = {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      enabled: true,
      options: {
        offset: [-85, 30],
      },
    },
  ],
};

function Header() {
  const history = useHistory();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const client = useApolloClient();

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const { currentUser, loading, error } = useCurrentUser();

  const tabs = {
    auth: [
      {
        title: 'My Projects',
        to: `/my-projects`,
        exact: true,
      },
      {
        id: 'submit',
        title: 'New Project',
        to: `/submit`,
        exact: true,
      },
    ],
    auth_and_Dropdown: [
      {
        title: 'Favorites',
        onClick: () => history.push(`/favorites`),
        leftIcon: <Bookmark />,
      },
      {
        title: 'ADMIN',
        onClick: () => history.push('/admin/not-approved'),
        leftIcon: <Git_Merge />,
      },
      {
        title: 'Log Out',
        onClick: () => setModalIsOpen(true),
        leftIcon: <Settings />,
      },
    ],
    not_auth: [
      {
        title: 'Register',
        to: `/register`,
        exact: true,
      },
      {
        title: 'Login',
        to: `/login`,
        exact: true,
      },
    ],
  };

  if (!isAuthenticated) {
    return null;
  } else {
    if (loading === false && !error) {
      if (currentUser.role !== 'ADMIN') {
        const tabfilter = tabs.auth.filter((tab) => tab.title !== 'ADMIN');
        const tabfilter1 = tabs.auth_and_Dropdown.filter(
          (tab) => tab.title !== 'ADMIN'
        );
        tabs.auth_and_Dropdown = tabfilter1;
        tabs.auth = tabfilter;
      }
      tabs.auth_and_Dropdown.unshift({
        title: 'Profile',
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
              <li key={tab.title} className={`nav ${tab?.id}`}>
                <StyledLink
                  activeClassName='current'
                  exact={tab.exact}
                  to={tab.to}
                >
                  <p className={tab?.id}>{tab.title}</p>
                </StyledLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {tabs.not_auth.map((tab) => (
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

      <VerticalLine />

      {isAuthenticated && (
        <Popper
          reference={(ref, handleClick) => (
            <MenuButton ref={ref} onClick={handleClick}>
              <Icon>
                <User />
              </Icon>
            </MenuButton>
          )}
          options={popperOptions}
        >
          <DropdownContainer>
            {tabs.auth_and_Dropdown.map((menu) => (
              <DropdownItem key={menu.title} onClick={menu.onClick}>
                <Icon>{menu.leftIcon}</Icon>

                <DropDownText>{menu.title}</DropDownText>
              </DropdownItem>
            ))}
          </DropdownContainer>
        </Popper>
      )}

      <PopupModal
        type='logout'
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={false}
        onClick={() => {
          localStorage.setItem('userToken', '');
          history.push('/login');
          client.cache.reset();
          setIsAuthenticated(false);
          setModalIsOpen(false);
        }}
      />
    </Container>
  );
}

export default Header;
