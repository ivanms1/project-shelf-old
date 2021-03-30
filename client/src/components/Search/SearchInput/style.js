import styled from 'styled-components';

export const InputWrapper = styled.div`
  /* border: 2px solid green; */
  max-width: 600px;
  flex: 1;
  margin: 0 auto;
  box-shadow: 0 14px 30px rgba(103, 132, 187, 0.1),
    0 4px 4px rgba(103, 132, 187, 0.04);
  display: grid;
  grid-template-columns: 30px auto 190px;
  padding: 11px 16px;
  background: rgb(251, 251, 251);
  border-radius: 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  background: rgb(251, 251, 251);
  padding-left: 13px;
  color: rgb(92, 114, 138);
  font-size: 15px;
  font-family: 'Poppins';
`;
