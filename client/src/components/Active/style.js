import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
  0% {
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 15px rgba(90, 153, 212, 0);
  }
  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
`;

export const Container = styled.div`
  width:50px;
  height: 50px;
  perspective: 1000;
  backface-visibility: hidden;
  position:relative;
  display:flex;
  padding:0 0px 0 0px;
  justify-content:flex-end;
  align-items:center;
`;

export const PulseButton = styled.span`
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  font-size: 1.3em;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 100px;
  letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 50%;
  background: ${props => props.active ? '#00cb5b' : '#D70330'};
  cursor: default;
  box-shadow: 0 0 0 0 ${props => props.active ? '#00cb5b' : '#ed2c49'};;
  animation: ${Pulse} 1.5s infinite;
`;

