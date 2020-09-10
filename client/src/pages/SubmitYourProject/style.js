import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  max-width: 1250px;
  margin: 0 auto;
  background-color: #f7f8fc;

  > p {
    letter-spacing: 1.1px;
    text-align: center;
    line-height: 2em;
    padding: 40px 10px;

    span {
      font-weight: 600;
      font-size: 27px;
    }

    span:first-child {
      color: #000000;
    }
    span:last-child {
      color: #000000;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      span {
        font-size: 19px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 20px 100px 20px;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      margin: 20px 0;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 506px;
  border-radius: 7px;
  box-shadow: 9px 9px 25px 0px rgb(0, 0, 0, 0.25);
  padding: 0px 20px 20px 20px;

  p {
    margin: 10px 0;
  }

  @media screen and (max-width: 420px) {
    span {
      line-height: 1.1em;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 331px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media screen and (max-width: 450px) {
    height: 250px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 20px;

  > span {
    font-weight: 600;
    color: #e85f99;
    font-size: 30px;
  }

  .first {
    font-weight: 500;
    font-size: 20px;
    color: #e85f99;
    word-wrap: break-word;
  }

  .second {
    color: #65587f;
    font-size: 20px;
    font-weight: 500;
    word-wrap: break-word;
  }

  .desc {
    color: #010101;
    font-size: 20px;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export const Submission = styled.form`
  width: 100%;
  height: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 13px 8px 16px 0px rgb(0, 0, 0, 0.2);
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #000000;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 1.1px;
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    span {
      line-height: 1.1em;
    }
  }
`;

export const Collection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    max-width: 220px;
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      max-width: 100%;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;

  label {
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
    letter-spacing: 1.1px;
  }

  @media screen and (max-width: 420px) {
    text-align: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1.11px solid hsl(213, 1%, 84%);
  margin: 5px;
  padding: 15px 20px 15px 20px;
  color: #24292e;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.1px;

  &:focus {
    outline: none;
    border: 1px solid #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const Upload = styled.input`
  width: 100%;
  border-radius: 7px;
  border: 1.11px solid hsl(213, 1%, 84%);
  margin-top: 5px;
  padding: 15px 0 15px 35px;
  color: #24292e;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1.1px;

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
    margin-left: 20px;
  }
`;

export const ErrorText = styled.small`
  color: red;
  margin: 10px 0 0 15px;
  font-size: 15px;
  font-weight: 400;
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 465px;
  max-height: 168px;
  min-height: 168px;
  min-width: 200px;
  border-radius: 7px;
  border: 1.11px solid hsl(213, 1%, 84%);
  margin-top: 5px;
  padding: 15px 20px 15px 30px;
  font-weight: 400;
  color: #24292e;
  font-size: 15px;
  letter-spacing: 1.1px;

  &:focus {
    outline: none;
    border: 1px solid #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }

  &::placeholder {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.1px;
  }
`;
