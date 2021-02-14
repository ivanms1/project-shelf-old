import styled, { css } from 'styled-components';
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
  max-width: 730px;
  max-height: 80%;
  flex-direction: column;
  z-index: 999 !important;
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
    width: 100%;
    font-weight: 600;
    text-align: center;
  }

  & .imgContainer {
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
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
  min-width: 60px;
  background-color: #1b74e4;
`;
