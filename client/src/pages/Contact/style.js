import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 10px;

  p:first-child {
    color: #212529;
    text-align: center;
    margin-bottom: 10px;

    span:first-child {
      font-weight: 600;
      font-size: 70px;
    }

    span:last-child {
      color: #2ecc71;
      font-weight: 600;
      font-size: 70px;
      line-height: 45px;
    }
  }

  p:nth-child(2) {
    color: #212529;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
  }

  p:nth-child(3) {
    color: #2ecc71;
    font-weight: 600;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    p:first-child {
      text-align: center;

      span:first-child {
        font-weight: 600;
        font-size: 30px;
      }

      span:last-child {
        color: #2ecc71;
        font-weight: 600;
        font-size: 30px;
      }
    }

    p:nth-child(2) {
      text-align: center;
      color: #212529;
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 15px;
    }

    p:nth-child(3) {
      text-align: center;
      color: #2ecc71;
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const LowerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 400px;
    height: 400px;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      z-index: 100;
    }

    div {
      width: 60px;
      height: 60px;
      background-color: rgb(0, 203, 91, 0.2);
      position: absolute;
      top: 17%;
      left: 42.5%;
      border-radius: 50%;
      z-index: 1;
    }
  }

  @media screen and (max-width: 753px) {
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      display: none;
    }
  }
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px 30px 30px 30px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Collection = styled.div`
  width: 100%;
  display: flex;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  label {
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
    letter-spacing: 1.1px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 7px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #c4c4c4;
  margin-top: 5px;
  padding: 15px 0 15px 35px;
  color: #6c757d;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.1px;

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
  }
`;

export const Discord = styled.input`
  width: 100%;
  border-radius: 7px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #c4c4c4;
  margin-top: 5px;
  padding: 15px 0 15px 35px;
  color: #6c757d;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.1px;

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  min-height: 120px;
  max-height: 120px;
  border-radius: 7px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  border: 1px solid #c4c4c4;
  margin-top: 5px;
  padding: 15px 30px 15px 35px;
  color: #6c757d;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.1px;

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
  }
`;
