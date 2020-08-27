import styled from 'styled-components';

export const CustomButton = styled.button`
background-color:${({ bgColor }) => bgColor};
width:100%;
padding:15px;
border-radius:7px;
box-shadow: 0 1px 6px 0 ${({ bgColor }) => bgColor};
border:none;
color:white;
font-weight:600;
font-size:22px;
margin:${props => props.margin};
letter-spacing:1.1px;
cursor:pointer;

:hover{
  transform:scale(1.02);
  transition:0.2s linear;
}

:active {
  transform: translateY(4px) scale(1.02);
}
`;