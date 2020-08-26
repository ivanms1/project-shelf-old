import React from 'react';
import styled, { keyframes } from "styled-components";


const rotator = keyframes`
0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
            transform: rotate(270deg);
  }
`;

const dash = keyframes`
 0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate(450deg);
            transform: rotate(450deg);
  }
`;


const color = keyframes`
0% {
    stroke: #4285F4;
  }
  25% {
    stroke: #DE3E35;
  }
  50% {
    stroke: #F7C223;
  }
  75% {
    stroke: #1B9A59;
  }
  100% {
    stroke: #4285F4;
  }
`;


const Div = styled.div`
    height:100vh;
    text-align:center;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

.spinner{
  -webkit-animation: ${rotator} 1.4s linear infinite;
          animation: ${rotator} 1.4s linear infinite;
}

.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
          transform-origin: center;
  -webkit-animation: ${dash} 1.4s ease-in-out infinite, ${color} 5.6s ease-in-out infinite;
          animation: ${dash} 1.4s ease-in-out infinite, ${color} 5.6s ease-in-out infinite;
}

`;


function Spinner(props) {
  return (
    <Div>
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </Div>
  );
}

export default Spinner;