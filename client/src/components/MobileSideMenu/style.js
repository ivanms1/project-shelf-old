import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

export const StyledModal = styled(Modal)`
  position: absolute;
  bottom: 25px;
  right: 25px;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.2) !important;
  border-radius: 4px;
  background-color: white;
  padding: 12px;
  width: 250px;
  height: 160px;
  z-index: 999 !important;
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: 850px) {
    display: none;
  }
`;

export const Menu = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;

  :hover {
    transform: scale(1.02) !important;
    transition: 0.1s linear !important;
  }

  :active {
    transform: translateY(1px) scale(1.01) !important;
  }

  span {
    text-align: center;
    font-size: 12px;
    color: #647380;
    margin-top: 7px;
  }
`;

export const Exit = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
`;
