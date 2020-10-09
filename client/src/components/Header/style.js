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

export const ReactModalStyled = styled(Modal)`
  position: absolute;
  padding: 20px 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 526px;
  border-radius: 7px;
  border: none;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${grow} 0.3s ease-in;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    width: 118px;
    height: 42px;
    border-radius: 7px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }

  button:active {
    transform: translateY(-7px);
    transition: 0.1s ease;
  }

  button:last-child {
    background-color: #00cb5b;
  }

  button:not(:last-child) {
    background-color: #ed2c49;
  }

  @media screen and (max-width: 400px) {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: column;

    button {
      width: 100%;
      margin: 5px 0;
    }
  }
`;
