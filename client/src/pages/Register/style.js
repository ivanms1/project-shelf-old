import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 25px;
`;

export const RegisterBox = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 25px 30px 25px 30px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 50px 0 0px 0;

  > span {
    font-weight: 600;
    font-size: 32px;
    color: #152c5b;
    letter-spacing: 1.1px;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;

  &:nth-child(n + 1) {
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

export const CustomRegisterCss = css`
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

export const LoginLink = styled(NavLink)`
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
