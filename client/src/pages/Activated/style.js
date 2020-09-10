import styled from 'styled-components';

export const Container = styled.div`
min-height:100vh;
display:flex;
flex-direction:column;
`;

export const ActivatedContainer = styled.div`
flex:1;
display:flex;
justify-content:center;
background-color:#f7f8fc;

main{
    height:100%;
    flex:1;
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:1500px;
    margin:20px 20px;

    p{
        font-size:25px;
        font-weight:600;
        color:#212529;
        letter-spacing:1px;
        margin:20px 20px 0 25px;
    }

    @media screen and (max-width:500px){
        p{
            text-align:center;
            font-size:23px;
        }
    }
}
`;

export const ProjectCollection = styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    height:100%;
    margin:50px 0 0 0;
    
`;

export const Card = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    box-Shadow: 10px 10px 40px 4px rgba(45,78,255,0.15);
    background-color:white;
    margin:0px 20px 50px 20px;
    padding:10px 20px 20px 20px;

    .imgContainer{    
        flex:1;
        margin:20px 0 0 0;    
        
        img{
            width:100%;
            height:100%;
            display:block;
            border-radius:10px;
        }
    }

    
    @media screen and (max-width:500px){
        padding:0px 20px 20px 20px;

        span{
            font-size:22px;
        }
    }
`;

export const HeaderCollection = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    span{
        font-weight:600;
        font-size:25px;
        color:#000;
        text-transform:capitalize;
    }

    @media screen and (max-width:500px){
        
        span{
            font-size:22px;
        }
    }
`;

export const Links = styled.div`
    padding:0px 0;
    display:flex;
    margin:10px 0 0 0;
    justify-content:space-between;

    a{
        text-align:center;
        padding:0 5px;
        font-size:16px;
        font-weight:500;
        color:#65587F;
        position: relative;
        text-decoration:none;
        cursor:pointer;
    }

    a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 1px;
    left: 0;
    background-color: #d30320;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  
   a:hover::before {
    visibility: visible;
    transform: scaleX(1);
    
  }

    @media screen and (max-width:400px){
        margin:0px 0 0 0;
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        
         a{
            text-align:center;
            padding:0 10px;
            font-size:16px;
            font-weight:500;
            color:#65587F;
            cursor:pointer;
        }
    }
`;

export const Name = styled.div`
    margin:20px 0 0 0;
    display:flex;
    align-items:center;
    justify-content:space-between;

    span{
        font-size:18px;
        font-weight:600;
        color:rgba(0,0,0,.60);
        letter-spacing:1px;
        text-transform:capitalize;
    }

@media screen and (max-width:500px){
        
        span{
            font-size:16px;
        }
    }
`;

export const Button = styled.button`
        padding:7px 15px;
        background-color:${props => props.approve ? '#00CB5B' : '#ED2C49'};
        color:white;
        font-weight:600;
        letter-spacing:1px;
        border:none;
        border-radius:7px;

    &:active{
    transform:translateY(-7px);
    transition:0.1s ease;
}
`;