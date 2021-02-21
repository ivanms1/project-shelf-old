import React, { useState, useEffect, useRef } from 'react';
import { usePopper } from 'react-popper';

import { ReactComponent as User } from '../../assets/user.svg';

import {
  MenuButton,
  Container,
  DropdownContainer,
  DropdownItem,
  Icon,
  DropDownText,
} from './style';

function DropDownPopper({ menuList = [] }) {
  const [visible, setVisibility] = useState(false);

  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
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
    }
  );

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  function handleDocumentClick(event) {
    if (referenceRef.current.contains(event.target)) {
      return;
    }
    setVisibility(false);
  }

  function handleDropdownClick(event) {
    setVisibility(!visible);
  }

  return (
    <React.Fragment>
      <MenuButton ref={referenceRef} onClick={handleDropdownClick}>
        <Icon>
          <User />
        </Icon>
      </MenuButton>

      <Container ref={popperRef} style={styles.popper} {...attributes.popper}>
        <DropdownContainer style={styles.offset} visible={visible}>
          {menuList.map((menu) => (
            <DropdownItem key={menu.title} onClick={menu.onClick}>
              <Icon>{menu.leftIcon}</Icon>

              <DropDownText>{menu.title}</DropDownText>
            </DropdownItem>
          ))}
        </DropdownContainer>
      </Container>
    </React.Fragment>
  );
}

export default DropDownPopper;
