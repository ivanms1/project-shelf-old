import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width:100%;
height:100vh;
background-color:#F7F8FC;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0 10px;

img{
    margin: 0 0 40px 0;
}
`;

export const RegisterBox = styled.div`
width:100%;
max-width:433px;
padding:40px 30px 50px 30px;
border-radius:7px;
background-color:white;
box-shadow:5px 5px 20px rgba(0,0,0,0.20);
display:flex;
align-items:center;
flex-direction:column;

>span{
    font-weight:600;
    font-size:35px;
    letter-spacing:1.1px;
    margin-bottom:10px;
}
`;

export const InputContainer = styled.div`
width:100%;
margin-top:20px;

label{
    font-weight:600;
    font-size:16px;
    margin-left:5px;
    letter-spacing:1.1px;
}
`;

export const Input = styled.input`
width:100%;
border-radius:7px;
box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.25);
border:1px solid #c4c4c4;
margin-top:5px;
padding:15px 0 15px 35px;
color:#6C757D;
font-weight:600;
font-size:15px;
letter-spacing:1.1px;

&::placeholder{
    color:#6C757D;
    font-weight:600;
    font-size:15px;
    letter-spacing:1.1px;
}
`;

export const Links = styled(Link)`
width:100%;
text-align:center;
margin-top:20px;
text-decoration:none;
font-weight:600;
font-size:18px;
color:#4285F4;
`;

export const SignInButton = styled.input`
background-color:#00CB5B;
width:100%;
padding:15px;
border-radius:7px;
box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.25);
border:none;
color:white;
font-weight:600;
font-size:22px;
margin-top:20px;
letter-spacing:1.1px;
cursor:pointer;

:active {
  transform: translateY(4px) scale(1.1);
}
`;
export const ErrorText = styled.small`
color:red;
margin:5px 0 0 10px;
font-size:15px;
font-weight:400;
`;