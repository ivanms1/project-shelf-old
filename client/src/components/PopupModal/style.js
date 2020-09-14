import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 20px 0;

  span {
    font-size: 21px;
    font-weight: 600;
  }

  button {
    border-radius: 50%;
    font-size: 30px;
    color: black;
    border: none;
    background-color: transparent;
  }
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.15);
  }

  &-content {
    padding: 20px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
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
