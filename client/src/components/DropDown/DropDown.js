import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

import { ReactComponent as User } from '../../assets/user.svg';

import '@szhsin/react-menu/dist/index.css';
import { styles } from './DropDownStyles';

const DropDownv2 = ({ list }) => {
  return (
    <Menu
      offsetY={60}
      direction='left'
      position='auto'
      menuButton={
        <MenuButton styles={styles.menuButton}>
          <User />
        </MenuButton>
      }
    >
      {list.map((a) => (
        <MenuItem styles={styles.menuItem} onClick={a.onClick}>
          <div
            style={{
              width: '28px',
              height: '28px',
            }}
          >
            {a.leftIcon}
          </div>
          <span style={styles.span}>{a.title}</span>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropDownv2;
