import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
/* border:2px solid green; */
position:absolute;
bottom:0;
width:100%;
min-height:100px;
padding:20px 10px 20px 10px;
background-color:#222222;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
overflow:hidden;

@media screen and (max-width:595px){
    padding:10px;
    display:flex;
    flex-direction:column;
}
`;


export const Links = styled.div`
/* border:2px solid green; */
width:100%;
max-width:900px;

ul{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}

.current{
    color: #2ECC71;
    font-weight:600;
  }

@media screen and (max-width:595px){
    margin-bottom:5px;
    margin-left:0px;

    ul{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        align-items:center;
    }
}
`;

export const StyledLink = styled(NavLink)`
    text-decoration:none;
    font-size:23px;
    font-weight:600;
    letter-spacing:1px;
    margin:0 20px 0 20px;
    color:white;

&:hover{
    color:#2ECC71;
    transition:0.3s linear;
}

@media screen and (max-width:595px){
    display:block;
    font-size:18px;
    margin-left:0px;
}

`;
