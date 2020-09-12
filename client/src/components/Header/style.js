import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';


const grow = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1;
}
`;

export const ReactModalStyled = styled(Modal)`
      position:absolute;
      padding:25px 35px;
      background-color:white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width:80%;
      height:100%;
      max-width: 526px;
      max-height: 208px;
      border-radius: 10px;
      border: none;
      box-Shadow: 10px 10px 40px 4px rgba(45,78,255,0.15);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${grow} 0.3s ease-in;
`;

export const Container = styled.div`
padding:0px 20px 0px 50px;
display:flex;
width:100%;
justify-content:space-around;
align-items:center;

@media screen and (max-width:676px){
   padding:0px 20px 0px 20px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
}

@media screen and (max-width:676px){
   padding:0px 10px 0px 20px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
}
`;

export const Logo = styled.div`
overflow:hidden;
width:100%;
margin:10px 0px 0px 0px;
max-width:90px;
height:75px;

img{
    width:100%;
    height:100%;
    display:block;
}
`;

export const Nav = styled.nav`
margin-left:60px;

ul{
    display:flex;
    flex-flow:row wrap;
    align-items: center;
    justify-content: center;
    width:100%;
}

li{
    padding:5px 21px 5px 21px;
}

@media screen and (max-width:676px){
    display:none;
}

.current{
    color: #7057FF;
    font-weight:600;
  }
`;

export const StyledLink = styled(NavLink)`
    text-decoration:none;
    color:#212529;
    font-size:21px;
    font-weight:600;
    letter-spacing:1px;

        &:hover{
            color:#7057FF;
            transition:0.3s linear;
        }
`;


export const LogoutButton = styled.a`
    text-decoration:none;
    color:#212529;
    font-size:21px;
    font-weight:600;
    letter-spacing:1px;
    cursor:pointer;
    margin:0 0px 0 0px;

        &:focus{
                color:#7057FF;
                transition:0.3s linear;
        }

        &:hover{
            color:#7057FF;
            transition:0.3s linear;
        }
`;



export const HeaderContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;

h1{
   font-weight:600;
   font-size:25px;
   letter-spacing:1px; 
}

a{
    cursor:pointer;
    font-weight:600;

&:hover{
        color:#d30320;
        transition:0.3s linear;
        }
}

@media screen and (max-width:400px){
    display:none;
}
`;

export const Sure = styled.p`
text-align:center;
width:100%;
font-weight:600;
font-size:23px;
letter-spacing:1px; 
`;


export const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;
width:100%;

button{
    width:118px;
    height:42px;
    border-radius:7px;
    color:white;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    border:none;
}

button:active{
    transform:translateY(-7px);
    transition:0.1s ease;
}

button:last-child{
    background-color:#00CB5B;
}

button:not(:last-child){
    background-color:#ED2C49;
}

@media screen and (max-width:400px){
    margin:10px 0 0 0;
    display:flex;
    flex-direction:column;

    button{
        width:100%;
        margin:5px 0;
    }
}
`;


