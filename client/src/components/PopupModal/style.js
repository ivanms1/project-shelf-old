import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  top: 50%;
  left: 50%;
  margin-right: -50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15) !important;
  border-radius: 7px;
  background-color: white;
  padding: 20px 20px 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .header {
    width: 100%;
    text-align: right;

    button {
      border-radius: 50%;
      font-size: 16px;
      font-weight: 400;
      color: black;
      border: none;
      background-color: transparent;

      &:hover {
        color: #d30320;
        transition: 0.3s linear;
      }
    }
  }

  & .body {
    padding: 15px 150px;
    font-size: 20px;
    margin: 10px 0 20px 0;
    width: 100%;
    font-weight: 600;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 370px;
  justify-content: space-between;
`;

export const CustomNoButton = css`
  letter-spacing: 1px;
  font-weight: 600;
  max-width: 120px;
  color: #1b74e4;
  border: 1px solid #1b74e4;
  background-color: white;
`;

export const CustomYesButton = css`
  letter-spacing: 1px;
  font-weight: 500;
  max-width: 120px;
  background-color: #1b74e4;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;

  span {
    font-size: 20px;
    font-weight: 600;
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

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.15);
  }

  &-content {
    margin: 0 20px;
    padding: 20px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 526px;
    border-radius: 7px;
    border: none;
    box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    margin: 20px 0 15px 0;
    width: 100%;
    text-align: center;
  }

  .imgContainer {
    overflow: hidden;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  button {
    width: 118px;
    height: 42px;
    border-radius: 7px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background-color: #7057ff;
  }

  button:active {
    transform: translateY(-7px);
    transition: 0.1s ease;
  }
`;
