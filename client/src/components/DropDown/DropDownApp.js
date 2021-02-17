import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as Cog } from '../../assets/cog.svg';
import { ReactComponent as User } from '../../assets/user.svg';

import styles from './style.module.css';

function DropDownApp({ list = [] }) {
  return (
    <Navbar>
      <NavItem>
        <DropdownMenu data={list}></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function useOutsideAlerter(ref, stateRef) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        stateRef.current(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, stateRef]);
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const navItemRef = useRef(null);
  const stateRef = useRef(setOpen);
  useOutsideAlerter(navItemRef, stateRef);

  return (
    <li ref={navItemRef} className={styles.navItem}>
      <button className={styles.iconButton} onClick={() => setOpen(!open)}>
        <User />
      </button>

      {open && props.children}
    </li>
  );
}

export function DropdownItem({ props }) {
  return (
    <a href='#' className={styles.menuItem} onClick={props.onClick}>
      <span className={styles.iconButton}>{props.leftIcon}</span>
      {props.title}
      <span className={styles.iconRight}>{props.rightIcon}</span>
    </a>
  );
}

function DropdownMenu({ data }) {
  const [activeMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className={styles.dropdown}
      style={{ minHeight: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          {data.length > 0 &&
            data.map((a) => (
              <DropdownItem key={a.title} leftIcon={<Cog />} props={a} />
            ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownApp;
