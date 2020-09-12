import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 25px;

  img {
    margin: 0 0 40px 0;
  }
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 433px;
  padding: 40px 30px 50px 30px;
  border-radius: 7px;
  background-color: white;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;

  > span {
    font-weight: 600;
    font-size: 35px;
    letter-spacing: 1.1px;
    margin-bottom: 10px;
  }

  .registerContainer {
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  label {
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
    letter-spacing: 1.1px;
    color: hsl(36, 41, 46);
    font-size: 15px;
    line-height: 21px;
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

export const Links = styled(Link)`
  width: 100%;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #4285f4;

  &:hover {
    text-decoration: underline;
    transition: 1.3s linear;
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
