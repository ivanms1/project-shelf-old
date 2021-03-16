import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Overlay = styled.div`
  background-color: #f7f8fc;
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  max-width: 1250px;
  margin: 0 auto;

  > p {
    text-align: center;
    padding: 50px 20px;

    span {
      font-weight: 600;
      font-size: 26px;
    }

    span:first-child {
      color: #152c5b;
    }
    span:last-child {
      color: #152c5b;
    }
  }

  @media screen and (max-width: 870px) {
    p {
      span {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    p {
      span {
        font-size: 18px;
      }
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 20px 50px;
  justify-content: space-between;
  align-items: flex-start;

  .loading {
    font-weight: 600;
    padding: 40px 0;
    text-align: center;
    border: 2px solid #2e2e2e;
    border-radius: 10px;
  }

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
  max-width: 400px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  padding: 25px 30px 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #152c5b;
    font-weight: 600;
    font-size: 25px;
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

  &:nth-child(n + 1) {
    margin-top: 10px;
  }

  label {
    font-weight: 500;
    font-size: 15px;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  border: 1.11px solid hsl(213, 1%, 84%);
  margin-top: 5px;
  padding: 12px 0px 12px 20px;
  color: hsl(210, 12%, 16%);
  font-size: 14px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1.1px;

  &:focus {
    outline: none;
    border: 1px solid #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }

  &::placeholder {
    color: #6c757d;
    font-size: 14px;
    letter-spacing: 1.1px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif !important;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const ErrorText = styled.small`
  color: #ff3a4c !important;
  margin: 5px 0 0 10px;
  font-size: 13px;
`;

export const TextArea = styled(TextareaAutosize)`
  width: 100%;
  max-width: 335px;
  max-height: 168px;
  min-height: 168px;
  min-width: 335px;
  border-radius: 5px;
  border: 1.11px solid hsl(213, 1%, 84%);
  margin-top: 5px;
  padding: 12px 20px 12px 20px;
  color: #24292e;
  font-size: 14px;
  letter-spacing: 1.1px;

  &:focus {
    outline: none;
    border: 1px solid #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }

  &::placeholder {
    color: #6c757d;
    font-size: 14px;
    letter-spacing: 1.1px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  @media screen and (max-width: 435px) {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    min-width: 100%;
  }
`;

export const CustomSubmitCss = css`
  background-color: #7057ff;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: 'Poppins';
  font-size: 18px;
  margin-top: 10px;

  @media screen and (max-width: 435px) {
    font-size: 16px !important;
  }
`;

export const CustomYesButton = css`
  letter-spacing: 1px;
  font-weight: 500;
  max-width: 120px;
  background-color: #1b74e4;
`;
