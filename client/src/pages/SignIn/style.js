import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: #f7f8fc;
`;

export const SignInBox = styled.div`
  background-color: white;
  width: 100%;
  max-width: 433px;
  border-radius: 5px;
  padding: 30px 30px 35px 30px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  margin: 50px 0 0 0;

  .registerContainer {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  > span {
    font-size: 35px;
    font-weight: 600;
    margin: 0px 0 10px 0;
    color: #212529;
    letter-spacing: 1.1px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  width: 100%;

  > span {
    font-weight: 600;
    font-size: 15px;
    margin-left: 5px;
    letter-spacing: 1.1px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1.11px solid hsl(213, 1%, 84%);
  border-radius: 5px;
  color: hsl(210, 12%, 16%);
  line-height: 20px;
  margin-top: 5px;
  padding: 15px 0 15px 20px;
  font-weight: 600;
  font-size: 15px;
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
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1.7px;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
`;

export const SignInButton = styled.input`
  background-color: #00cb5b;
  width: 100%;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-top: 10px;
  letter-spacing: 1.1px;
  cursor: pointer;

  :active {
    transform: translateY(4px);
    transition: 0.3s linear;
  }
`;

export const ErrorText = styled.small`
  color: red;
  margin: 5px 0 0 10px;
  font-size: 15px;
  font-weight: 400;
`;

export const Links = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #4285f4;
  font-size: 18px;
  width: 100%;

  &:hover {
    text-decoration: underline;
    transition: 1.3s linear;
  }
`;

export const LoginDetailsError = styled.div`
  background-color: #f7f8fc;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 25px;
  }

  button {
    background-color: #00cb5b;
    width: 100%;
    max-width: 300px;
    margin: 10px 20px;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    border: none;
    color: white;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 1.1px;
    cursor: pointer;

    :active {
      transform: translateY(4px);
    }
  }
`;
