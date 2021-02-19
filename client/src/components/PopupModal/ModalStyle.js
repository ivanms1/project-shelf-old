import styled, { css } from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  top: 50%;
  left: 50%;
  margin-right: -50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.2) !important;
  border-radius: 12 px;
  background-color: white;
  padding: 20px 20px 20px 20px;
  width: 100%;
  max-width: 415px;
  max-height: 397px;
  z-index: 999 !important;

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

  @media screen and (max-width: 450px) {
    max-width: 330px;
    max-height: 440px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 370px;
  justify-content: space-between;
  margin: 15px 0;
`;

export const CustomNoButton = css`
  letter-spacing: 1.5%;
  max-width: 160px;
  min-width: 60px;
  color: black;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 0;
  border-radius: 7px;
  box-shadow: none !important;
`;

export const CustomYesButton = css`
  letter-spacing: 1.5%;
  max-width: 160px;
  min-width: 60px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 7px;
  font-family: 'Poppins', sans-serif;
  box-shadow: none !important;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

export const Description = styled.div`
  margin: 20px 0;

  span {
    display: block;
    text-align: center;
  }

  span:first-child {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  span:last-child {
    font-weight: 500;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const CloseButton = styled.div`
  text-align: right;
  width: 100%;

  button {
    border: 1px solid #8e8e8e;
    padding: 4px 6px;
    font-weight: 600;
    border-radius: 4px;
    background-color: transparent;
    color: #fe1e1e;
    user-select: none;

    :hover {
      color: white;
      background-color: #fe1e1e;
      transition: 0.3s linear;
    }
  }
`;
