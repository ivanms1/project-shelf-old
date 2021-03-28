import React from 'react';

import { Container } from './style';

export default function BurgerIcon({ open, onClick }) {
  return (
    <Container open={open} onClick={onClick}>
      <div className={open ? 'burger-menu open' : 'burger-menu'}>
        <div className='bar1' key='b1' />
        <div className='bar2' key='b2' />
        <div className='bar3' key='b3' />
      </div>
    </Container>
  );
}
