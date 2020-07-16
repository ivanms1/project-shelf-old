import styled from 'styled-components';

export const Container = styled.div`
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:#f7f8fc;
padding:1.7em;

h1{
    font-size:4em;
    margin-bottom:2em;
    color:#f18867;
    text-align:center;
}

div{
width:250px;
height:250px;
overflow:hidden;
}

img{
width:100%;
height:100%;
display:block;
}


@media screen and (max-width:400px){
    h1{
        font-size:35px;
        line-height:1em;
    }
}
`