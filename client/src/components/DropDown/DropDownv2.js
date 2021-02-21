import React, { useState } from 'react';
import { Menu, MenuContainer, MenuItem } from './style';

const DropDownv2 = ({ menuItems = [] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Menu>
      <button onClick={() => setIsOpen(!isOpen)}>open menu</button>
      {isOpen && (
        <MenuContainer>
          {menuItems?.map((menu) => (
            <MenuItem onClick={menu.onClick}>{menu.title}</MenuItem>
          ))}
        </MenuContainer>
      )}
    </Menu>
  );
};

export default DropDownv2;
