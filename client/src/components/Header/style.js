import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.20);
padding:20px 30px 20px 100px;
display:flex;
width:100%;
justify-content:space-around;
align-items:center;


@media screen and (max-width:595px){
   padding:20px 20px 20px 20px;
   /* border:2px solid green; */
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
}

@media screen and (max-width:535px){
   padding:20px 10px 20px 20px;
   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;
}

`;


export const Logo = styled.div`
/* border:2px solid green; */
display:flex;
justify-content:space-between;
align-items:center;


>div{
    width:90px;
    height:90px;
}

img{
    width:100%;
    height:100%;
    display:block;
    border-radius:50%;
    background-color:#40d884;
}

span{
    font-size:27px;
    color:#6C757D;
    font-weight:600;
    letter-spacing:2px;
}


@media screen and (max-width:535px){
    /* border:2px solid green; */
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:100%;
    max-width:250px;
    min-width:250px;

    >div{
    width:80px;
    height:80px;
    margin-right:0px;
    }

    span{
        font-size:25px;
    }
}
`;

export const Links = styled.div`
/* border:2px solid green; */
width:100%;
max-width:900px;
margin-left:50px;



ul{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    /* border:2px solid green; */
}

@media screen and (max-width:595px){
    display:none;
}

.current{
    color: #2ECC71;
    font-weight:600;
  }
`;

export const StyledLink = styled(NavLink)`
    text-decoration:none;
    color:#212529;
    font-size:23px;
    font-weight:600;
    letter-spacing:1px;
    margin:0 20px 0 20px;

        &:hover{
            color:#2ECC71;
            transition:0.3s linear;
        }
`;


