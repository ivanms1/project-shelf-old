import styled from 'styled-components';

export const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  z-index: 999;
`;

export const DropdownContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.14);
  padding: 5px;
`;

export const DropdownItem = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  padding: 8px 12px;
  border: none;

  &:hover {
    border-radius: 5px;
    background-color: #f2f2f2;
  }
`;

export const DropDownText = styled.span`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins';
`;

export const Icon = styled.span`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border-radius: 50%;
  background-color: #e4e6eb;
`;
