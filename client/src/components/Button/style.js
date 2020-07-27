import styled from 'styled-components';

export const CustomButton = styled.button`
background-color:${({ bgColor }) => bgColor};
width:100%;
padding:15px;
border-radius:7px;
box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.25);
border:none;
color:white;
font-weight:600;
font-size:22px;
margin:${props => props.margin};
letter-spacing:1.1px;
cursor:pointer;

:active {
  transform: translateY(4px) scale(1.02);
}
`;