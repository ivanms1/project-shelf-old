import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  padding-right: 40px;
  background-color: #fff;
  position: relative;

  @media screen and (max-width: 1366px) {
    padding-right: 70px;
    padding-left: 70px;
  }
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
  }

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #152c5b;
  font-size: 18px;
  letter-spacing: 1px;

  .submit {
    cursor: pointer;
    color: white !important;
    border-radius: 8px;
    background-color: #1b74e4;
    font-size: 14px;
    text-decoration: none !important;
    box-shadow: 0px 4px 10px rgba(45, 78, 255, 0.25);
    padding: 8px 16px;

    :hover {
      transform: scale(1.02) !important;
      transition: 0.2s linear !important;
    }

    :active {
      transform: translateY(2px) scale(1.02) !important;
    }
  }

  small {
    sub {
      font-size: 12px !important;
      color: #152c5b !important;
      font-weight: 500;
    }
  }
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 849px) {
    display: none;
  }
`;

export const DropdownContainer = styled.div`
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
  padding: 5px;

  @media screen and (max-width: 849px) {
    display: none;
  }
`;

export const DropdownItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  padding: 8px 12px;
  border: none;
  width: 100%;
  padding-right: 25px;

  &:hover {
    border-radius: 5px;
    background-color: #f2f2f2;
  }
`;

export const DropDownText = styled.span`
  margin-left: 25px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  text-align: left;
  letter-spacing: 1px;
  font-family: 'Poppins';
`;

export const Icon = styled.span`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 50%;
  background-color: #e4e6eb;
`;

export const VerticalLine = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.6);
  width: 10px;
  height: 20px;
  margin-right: 20px;

  @media (max-width: 849px) {
    display: none;
  }
`;
