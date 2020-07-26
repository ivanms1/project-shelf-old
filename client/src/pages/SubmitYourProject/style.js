import styled from "styled-components";

export const Container = styled.div`
width:100%;
max-width:1450px;
height:100%;
margin:0 auto;
background-color:#F7F8FC;

>p{
    letter-spacing:1.1px;
    text-align:center;
    line-height:2em;
    padding:40px 10px;

    span{
        font-weight:600;
        font-size:29px;
    }

    span:first-child{
        color:#F18867;
    }
    span:last-child{
        color:#E85F99;
    }
}
`;

export const FormContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
padding:20px 20px;
justify-content:space-between;
align-items:flex-start;

@media screen and (max-width:1050px){
    display:flex;
    flex-direction:column;
    align-items:center;

    >div{
        margin:20px 0;
    }
}
`;

export const Card = styled.div`
width:100%;
max-width:506px;
border-radius:7px;
box-shadow:9px 9px 25px 0px rgb(0,0,0,0.25);
padding:0px 20px 20px 20px;

p{
    margin:10px 0;
}

@media screen and (max-width:420px){
   span{
       line-height:1.1em;
   }
}
`;

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
`;

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
    word-wrap: break-word;
}

.second{
    color:#65587F;
    font-size:20px;
    font-weight:500;
    word-wrap: break-word;
}

.desc{
    color:#010101;
    font-size:20px;
    overflow:hidden;
    word-wrap: break-word;
}
`;

export const Submission = styled.div`
width:100%;
height:100%;
max-width:506px;
background-color:white;
border-radius:7px;
box-shadow:13px 8px 16px 0px rgb(0,0,0,0.20);
padding:20px 20px 20px 20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

span{
    color:#E85F99;
    font-weight:600;
    font-size:30px;
    letter-spacing:1.1px;
    text-align:center;
}

@media screen and (max-width:420px){
   span{
       line-height:1.1em;
   }
}
`;

export const Collection = styled.div`
display:flex;
justify-content:space-between;
align-items:flex-end;

>div{
    max-width:220px;
}

@media screen and (max-width:420px){
  display:flex;
  flex-direction:column;
  align-items:center;

  >div{
   max-width:100%;
}
}
`;

export const InputContainer = styled.div`
width:100%;
margin-top:15px;

label{
    font-weight:600;
    font-size:16px;
    margin-left:5px;
    letter-spacing:1.1px;
}

@media screen and (max-width:420px){
 text-align:center;
}
`;

export const Input = styled.input`
width:100%;
border-radius:7px;
box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.25);
border:1px solid #c4c4c4;
margin:5px;
padding:15px 20px 15px 20px;
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

@media screen and (max-width:420px){
  width:100%;
}
`;

export const Upload = styled.input`
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
    margin-left:20px;
}
`;

export const ErrorText = styled.small`
color:red;
margin:10px 0 0 15px;
font-size:15px;
font-weight:400;
`;

export const TextArea = styled.textarea`
width:100%;
max-width:465px;
max-height:168px;
min-height:168px;
min-width:300px;
border-radius:7px;
box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.25);
border:1px solid #c4c4c4;
margin-top:5px;
padding:15px 20px 15px 30px;
font-weight:600;
color:#6C757D;
font-size:15px;
letter-spacing:1.1px;

&::placeholder{
    color:#6C757D;
    font-weight:600;
    font-size:15px;
    letter-spacing:1.1px;
}
`;

