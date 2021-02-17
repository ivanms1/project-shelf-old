import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #263238;
  box-shadow: -5rem 0rem 0rem rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  -webkit-animation: circle_classic 1s ease-in-out infinite alternate;
  -moz-animation: circle_classic 1s ease-in-out infinite alternate;
  animation: circle_classic 1s ease-in-out infinite alternate;

  @-webkit-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -webkit-transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -webkit-transform: rotate(360deg) scale(1.2);
    }
  }
  @-moz-keyframes circle_classic {
    0% {
      opacity: 0.1;
      -moz-transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      -moz-transform: rotate(360deg) scale(1.2);
    }
  }
  @keyframes circle_classic {
    0% {
      opacity: 0.1;
      transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg) scale(1.2);
    }
  }
`;
