import styled from 'styled-components';

export const Container = styled.div`
width:100%;
background-color:#F7F8FC;
`

export const Approval = styled.div`
width:100%;
max-width:1300px;
margin:0 auto;
background-color:#F7F8FC;
padding:20px 40px;
display:flex;
justify-content:space-between;

>p{
    font-weight:600;
    font-size:28px;
}

>div{
    width:100%;
    max-width:400px;
    display:flex;
    justify-content:space-between;   

    >span{
        font-weight:600;
        font-size:20px;
    } 
}

@media screen and (max-width:700px){
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    >p{
        margin-bottom:10px;
    }

    >div{
        >span{
            margin:0 5px;
        }
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
flex-wrap:wrap;
padding:15px;
`
export const Card = styled.div`
width:100%;
max-width:506px;
border-radius:7px;
box-shadow:9px 9px 25px 0px rgb(0,0,0,0.25);
padding:20px 20px;
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
export const Active = styled.div`
margin-bottom:10px;
`

export const Color = styled.div`
width:30px;
height:30px;
background-color:${props => props.active ? '#00CB5B' : '#ED2C49'};
border-radius:50%;
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

export const Visit = styled.input`
background-color:#ED2C49;
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
  transform: translateY(4px) scale(1.05);
}
`