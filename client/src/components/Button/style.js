import styled from 'styled-components';

export const CustomButton = styled.button`
  background-color: ${({ kind }) => {
    switch (kind) {
      case 'delete':
        return '#D1383D';
      case 'edit':
        return '#7057FF';
      case 'approve':
        return '#00cb5b';
      case 'disapprove':
        return '#d70330';
      default:
        return '';
    }
  }};
  padding: ${({ kind }) => {
    switch (kind) {
      case 'delete':
        return '10px 0px';
      case 'approve':
        return '7px 0px';
      default:
        return '10px 0px';
    }
  }};
  border-radius: 7px;
  color: white;
  width: 100%;

  font-weight: ${({ kind }) => {
    switch (kind) {
      case 'big':
        return '800';
      case 'medium':
        return '600';
      default:
        return '400';
    }
  }};
  letter-spacing: 1px;
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case 'big':
        return '21px';
      case 'medium':
        return '18px';
      case 'small':
        return '15px';
      default:
        return '18px';
    }
  }};
  border: none;
  outline: none;

  :hover {
    transform: scale(1.02);
    transition: 0.2s linear;
  }

  :active {
    transform: translateY(2px) scale(1.02);
  }
  ${({ addCSS }) => addCSS}

  @media screen and (max-width:600px) {
    font-size: ${({ fontSize }) => {
      switch (fontSize) {
        case 'big':
          return '18px';
        case 'medium':
          return '16px';
        case 'small':
          return '14px';
        default:
          return '18px';
      }
    }};
    padding: ${({ kind }) => {
      switch (kind) {
        case 'delete':
          return '10px 0px';
        case 'approve':
          return '7px 12px';
        default:
          return '10px 0px';
      }
    }};
  }
`;
