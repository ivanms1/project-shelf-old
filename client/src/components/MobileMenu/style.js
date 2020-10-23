import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;
  ul {
    position: relative;
    top: 0px;
    font-size: 50px;
    padding: 0px;
  }
  li {
    list-style: none;
    margin: 10px 0px;
    padding: 0;
    cursor: pointer;

    &:hover {
      color: #2ecc71;
      transition: 0.3s linear;
    }
  }

  .current {
    color: #222222;
    font-weight: 600;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: #474547;
`;
