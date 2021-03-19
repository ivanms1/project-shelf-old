import styled, { css } from 'styled-components';
import Popup from 'reactjs-popup';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f7f8fc;
`;

export const Approval = styled.div`
  width: 100%;
  max-width: 1380px;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    padding: 0 10px;
    color: #152c5b;
    width: 100%;
    max-width: 500px;
    font-weight: 600;
    font-size: 26px;
    text-transform: capitalize;
  }

  @media screen and (max-width: 746px) {
    display: flex;
    padding: 50px 0px 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > p {
      text-align: center;
      padding: 0 0px;
      max-width: 100%;
      font-size: 23px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      > span {
        margin: 0 5px;
      }
    }
  }
`;

export const ActiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  div {
    width: 100%;
    max-width: 240px;
  }

  .activeContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .text {
    width: 100%;
    min-width: 170px;
    padding: 0 15px;
  }

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > div {
    width: 100%;

    > span {
      margin: 0 0 0 20px;
      font-weight: 600;
      font-size: 19px;
    }
  }

  @media screen and (max-width: 746px) {
    div {
      width: 100%;
    }

    .activeContainer {
      width: 100%;
      display: flex;
      display: none;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;

  .noproject {
    margin: 20vh auto;
    font-size: 20px;
    text-align: center;
  }
`;

export const Active = styled.div`
  margin-bottom: 10px;
`;

export const Color = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.active ? '#00CB5B' : '#ED2C49')};
  border-radius: 50%;
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;

export const CustomDeleteButtonCSS = css`
  margin-right: 36px;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.15);
  }

  &-content {
    padding: 25px 35px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
    max-width: 500px;
    max-height: 208px;
    border-radius: 10px;
    border: none;
    box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);

    @media screen and (max-width: 676px) {
      padding: 20px 20px 40px 20px;
    }
  }
`;
