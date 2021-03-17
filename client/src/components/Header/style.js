import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
  padding-right: 20px;
  background-color: #fff;
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
  &:hover {
    border-radius: 5px;
    background-color: #f2f2f2;
  }
`;

export const DropDownText = styled.span`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 400;
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
