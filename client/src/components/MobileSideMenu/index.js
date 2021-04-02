import React from 'react';
import Modal from 'react-modal';

import { useAppContext } from '../../Context/AppContext';

import useCurrentUser from '../useCurrentUser';

import { ReactComponent as Home } from '../../assets/MobileMenuSVG/home.svg';
import { ReactComponent as User } from '../../assets/MobileMenuSVG/user.svg';
import { ReactComponent as Create } from '../../assets/MobileMenuSVG/plus-circle.svg';
import { ReactComponent as Admin } from '../../assets/MobileMenuSVG/git-merge.svg';
import { ReactComponent as LogOut } from '../../assets/MobileMenuSVG/log-out.svg';
import { ReactComponent as X } from '../../assets/MobileMenuSVG/x.svg';

import { StyledModal, Menu, Exit } from './style';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'none',
  },
};

function MobileSideMenu({ isOpen, onRequestClose, onClick = null, ...props }) {
  const { isAuthenticated, handleLogout } = useAppContext();

  const { currentUser, loading, error } = useCurrentUser();

  const MobileMenuOptions = {
    ifAuth: [
      {
        title: 'Home',
        to: `/`,
        icon: <Home />,
        exact: true,
      },
      {
        title: 'My Profile',
        to: `/my-profile`,
        icon: <User />,
        exact: true,
      },
      {
        title: 'ADMIN',
        to: `/admin`,
        icon: <Admin />,
        exact: true,
      },
      {
        title: 'New Project',
        to: `/submit`,
        icon: <Create />,
        exact: true,
      },
      {
        title: 'Log Out',
        to: 'log-out',
        icon: <LogOut />,
        onClick: () => handleLogout(),
        exact: true,
      },
    ],
  };

  if (!loading && !error && currentUser?.role !== 'ADMIN') {
    const tabfilter = MobileMenuOptions.ifAuth.filter(
      (tab) => tab.title !== 'ADMIN'
    );
    MobileMenuOptions.ifAuth = tabfilter;
  }

  return (
    <>
      {isAuthenticated && (
        <StyledModal
          shouldCloseOnOverlayClick={true}
          isOpen={isOpen}
          style={customStyles}
          onRequestClose={onRequestClose}
          {...props}
        >
          {MobileMenuOptions?.ifAuth.map((menu) => (
            <Menu
              key={menu.title}
              to={menu.to}
              onClick={() => {
                menu.onClick && menu?.onClick();
                onRequestClose();
              }}
            >
              {menu?.icon}
              <span>{menu.title}</span>
            </Menu>
          ))}

          <Exit onClick={onRequestClose}>
            <X />
          </Exit>
        </StyledModal>
      )}
    </>
  );
}

export default MobileSideMenu;
