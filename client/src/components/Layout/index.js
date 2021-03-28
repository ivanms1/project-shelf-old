import React, { useState } from 'react';
import Routes from '../../Routes';
import Header from '../Header';

import BurgerIcon from '../BurgerIcon';
import MobileSideMenu from '../MobileSideMenu';

import { Main } from './style';

function Layout() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <Main>
      <Header />
      <Routes />
      <BurgerIcon
        onClick={() => setOpenMobileMenu(true)}
        open={openMobileMenu}
      />
      <MobileSideMenu
        isOpen={openMobileMenu}
        onRequestClose={() => setOpenMobileMenu(false)}
      />
    </Main>
  );
}

export default Layout;
