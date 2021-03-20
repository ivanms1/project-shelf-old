import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  background-color: #f7f8fc;
`;

export const LoginBox = styled.div`
  background-color: white;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  padding: 25px 30px 25px 30px;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  margin: 50px 0 0 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  > span {
    font-size: 32px;
    font-weight: 600;
    color: #152c5b;
    letter-spacing: 1.1px;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:nth-child(3) {
    margin-top: 10px;
  }

  > label {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1.11px solid hsl(213, 1%, 84%);
  border-radius: 5px;
  color: hsl(210, 12%, 16%);
  margin-top: 5px;
  padding: 12px 0 12px 20px;
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
      Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
`;

export const CustomLoginCss = css`
  background-color: #00cb5b;
  font-weight: 500;
  letter-spacing: 1px;
  font-family: 'Poppins';
  font-size: 18px;
`;

export const ErrorText = styled.small`
  color: #ff3a4c !important;
  font-size: 13px;
`;

export const RegisterLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #4285f4;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;

  &:hover {
    text-decoration: underline;
    transition: 1.3s linear;
  }
`;
