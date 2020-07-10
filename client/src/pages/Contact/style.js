import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100%;
/* border:2px solid green; */
background-color:#F7F8FC;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:40px 10px;

p:first-child{
    color:#212529;
    text-align:center;
    margin-bottom:10px;
    
    span:first-child{
        font-weight:600;
        font-size:70px;
    }

    span:last-child{
        color:#2ECC71;
        font-weight:600;
        font-size:70px;
        line-height:45px;
    }
}

p:nth-child(2){
    color:#212529;
    font-weight:600;
    font-size:20px;
    margin-bottom:10px;
}

p:nth-child(3){
    color:#2ECC71;
    font-weight:600;
    font-size:20px;
}

@media screen and (max-width:500px){
    p:first-child{
        text-align:center;

   span:first-child{
        font-weight:600;
        font-size:30px; 
    }

    span:last-child{
        color:#2ECC71;
        font-weight:600;
        font-size:30px;
    }
}

    p:nth-child(2){
        text-align:center;
        color:#212529;
        font-weight:600;
        font-size:18px;
        margin-bottom:15px;
    }

    p:nth-child(3){
        text-align:center;
        color:#2ECC71;
        font-weight:600;
        font-size:18px;
    }
}
`

export const TextContainer = styled.div`
/* border:2px solid green; */
text-align:center;
width:100%;
`

export const LowerContainer = styled.div`
/* border:2px solid green; */
width:100%;
max-width:1000px;
margin-top:50px;
display:flex;
justify-content:space-between;
align-items:center;

>div{
    width: 400px;
    height: 400px;
    position: relative;

img{
    height: 100%;
    width: 100%;
    z-index: 100; 
}

div{
    width: 60px;
    height: 60px;
    background-color: rgb(0,203,91,0.20);
    position: absolute;
    top: 17%;
    left: 42.5%;
    border-radius: 50%;
    z-Index: 1;
}

}


@media screen and (max-width:753px){
    display:flex;
    justify-content:center;
    align-items:center;

    >div{
        display:none;
    }
}
`


export const RegisterBox = styled.div`
width:100%;
max-width:400px;
padding:20px 30px 50px 30px;
/* border:2px solid green; */
border-radius:7px;
background-color:white;
box-shadow:5px 5px 20px rgba(0,0,0,0.20);
display:flex;
align-items:center;
flex-direction:column;
margin-bottom:20px;
`

export const Collection = styled.div`
/* border:2px solid green; */
width:100%;
display:flex;
`

export const InputContainer = styled.div`
/* border:2px solid green; */
width:100%;
margin-top:20px;

label{
    font-weight:600;
    font-size:16px;
    margin-left:5px;
    letter-spacing:1.1px;
}
`

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
`

export const Discord = styled.input`
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
`

export const TextArea = styled.textarea`
width:100%;
/* min-width:374px;
max-width:374px; */
height:100%;
min-height:120px;
max-height:120px;
border-radius:7px;
box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.25);
border:1px solid #c4c4c4;
margin-top:5px;
padding:15px 30px 15px 35px;
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
`

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
`