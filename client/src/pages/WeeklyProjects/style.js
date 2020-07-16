import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color:#F7F8FC;
`

export const SearchContainer = styled.div`
width:100%;
max-width:1400px;
margin:0 auto;
padding:30px 20px;
display:flex;
align-items:center;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;

>p{
    color:#F18867;
    font-weight:600;
    font-size:28px;
}

select{
    padding:7px 20px 7px 10px;
    border-radius:5px;
    color:#e85f99;
    font-weight:600;
}

@media screen and (max-width:820px){
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;

>p{
    text-align:center;
    font-size:25px;
    margin-bottom:20px;
}
}
`

export const CardContainer = styled.div`
width:100%;
max-width:1400px;
margin:0 auto;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
flex-wrap:wrap;
padding:15px;
`

export const Card = styled.div`
width:100%;
max-width:506px;
border-radius:7px;
box-shadow:9px 9px 25px 0px rgb(0,0,0,0.25);
padding: 0px 20px 20px 20px;
margin:15px 0;

p{
    margin:10px 0;
}

@media screen and (max-width:420px){
   span{
       line-height:1.1em;
   }
}
`

export const ImageContainer = styled.div`
overflow:hidden;
height:331px;

img{
    width:100%;
    height:100%;
    display:block;
}

@media screen and (max-width:450px){
    height:250px;
}
`

export const Description = styled.div`
width:100%;
margin-top:20px;

>span{
    font-weight:600;
    color:#E85F99;
    font-size:30px;
}

.first{
    font-weight:500;
    font-size:20px;
    color:#E85F99;
}

.second{
    color:#65587F;
    font-size:20px;
    font-weight:500;
}

.desc{
    color:#010101;
    font-size:20px;
}
`
