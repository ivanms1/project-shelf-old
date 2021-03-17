import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f7f8fc;
`;

export const TabContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1350px;

  .current {
    background-color: #20c997;
    color: #fff;
    border: 1px solid #20c997;
    font-weight: 600;
  }

  ul {
    display: flex;
    list-style: none;
  }

  @media screen and (max-width: 840px) {
    display: flex;
    justify-content: center;
    transition: all 0.3s linear;
  }
`;

export const StyledNavLink = styled(NavLink)`
  background-color: #fff;
  height: 100%;
  color: #152c5b;
  font-size: 16px;
  padding: 11px 20px 9px 20px;
  outline: none;
  background-color: transparent;
  border: none;
  letter-spacing: 1px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  text-decoration: none;
  @media screen and (max-width: 412px) {
    font-size: 14px;
  }
`;
