import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
overflow:hidden;
padding:0 10px;
background-color:#f7f8fc;
`;

export const SignInBox = styled.div`
background-color:white;
width:100%;
max-width:433px;
border-radius:5px;
padding:30px 30px 40px 30px;
box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.20);
margin:50px 15px;
`;

export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position:relative;

>span{
    font-size:35px;
    font-weight:600;
    margin:0px 0 10px 0;
    color:#212529;
    letter-spacing:1.1px;
}
`;

export const InputContainer = styled.div`
display:flex;
flex-direction:column;
margin-top:17px;
width:100%;

>span{
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
margin-top:10px;
letter-spacing:1.1px;
cursor:pointer;

:active {
  
  transform: translateY(4px);
}
`;

export const ErrorText = styled.small`
color:red;
margin:5px 0 0 10px;
font-size:15px;
font-weight:400;
`;

export const Links = styled(Link)`
text-decoration:none;
font-weight:600;
margin:12px 0;
color:#4285F4;
width:100%;
text-align:right;

&:hover{
    text-decoration:underline;
    transition:1.3s linear;
}
`;

export const LoginDetailsError = styled.div`
background-color:#f7f8fc;
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

p{
    font-weight:600;
    font-size:25px;
}

button{
background-color:#00CB5B;
width:100%;
max-width:300px;
margin:10px 20px;
padding:15px;
border-radius:7px;
box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.25);
border:none;
color:white;
font-weight:600;
font-size:22px;
letter-spacing:1.1px;
cursor:pointer;

:active {
  
  transform: translateY(4px);
}
}
`;