import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';

const grow = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1;
}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    z-index: 0 !important;
    justify-content: center;

    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  li {
    padding: 20px 15px 20px 15px;
  }

  .logo {
    font-size: 23px;
    color: #20c997;
    text-decoration: none !important;
    font-weight: 500;
  }

  .current {
    color: #20c997;
    font-weight: 500;
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #152c5b;
  font-size: 18px;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
    transition: text-decoration 0.3s ease-in;
  }

  small {
    sub {
      font-size: 12px !important;
      color: #152c5b !important;
      font-weight: 500;
    }
  }
`;

export const LogoutButton = styled.a`
  text-decoration: none;
  color: #152c5b;
  font-size: 18px;
  cursor: pointer;
  margin: 0 0px 0 0px;

  &:focus {
    color: #7057ff;
    transition: 0.3s linear;
  }

  &:hover {
    text-decoration: underline;
    transition: 0.3s linear;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    font-weight: 600;
    font-size: 20px;
  }

  button {
    border-radius: 50%;
    font-size: 18px;
    font-weight: 600;
    color: black;
    border: none;
    background-color: transparent;

    &:hover {
      color: #d30320;
      transition: 0.3s linear;
    }
  }

  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const Sure = styled.p`
  text-align: center;
  width: 100%;
  font-size: 18px;
`;
