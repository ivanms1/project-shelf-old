import styled from 'styled-components';

const colors = {
  green: 'rgba(0, 203, 91, 0.7)',
  red: ' rgba(237, 44, 73, 0.7)',
};

export const Main = styled.div`
  margin-bottom: 20px;
`;

export const CardContainerOutter = styled.div`
  padding: 7px;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${({ isApproved }) =>
    isApproved ? colors.green : colors.red};
  position: relative;

  & .starContainer {
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    right: -17px;
    top: -15px;
  }
`;

export const CardContainerInner = styled.div`
  width: 381px;
  height: 216px;
  border-radius: 7px;

  & .imgContainer {
    display: inline-block;
    width: 100%;

    text-align: center;
    position: relative;
    overflow: hidden;
  }

  & .imgContainer:hover .overlay {
    opacity: 1;
  }

  img {
    border-radius: 5px;
    backface-visibility: hidden;
    display: block;
    object-fit: cover;
    width: 100%;
  }

  & .overlay {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.55);
  }

  & .overlayContent {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ProjectDetails = styled.div`
  padding: 0px 0px 0px 20px;

  & .userName {
    display: block;

    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }

  & .submissionDate {
    display: block;
    font-size: 13px;
    font-weight: 200;
  }
`;

export const ViewDetails = styled.button`
  padding: 10px 17px;
  font-size: 12px;
  color: black;
  font-family: 'Poppins', sans-serif;
  background-color: white;
  letter-spacing: 1px;
  font-weight: 600;
  border: none;
  border-radius: 5px;

  &:active {
    transform: scale(0.97);
    transition: 0.3s linear ease-in;
  }
`;
