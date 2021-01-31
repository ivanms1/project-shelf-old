import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f7f8fc;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 2px solid green;
  padding: 15px;

  & .imgUserDetails {
    border: 2px solid green;
    width: 55%;
  }

  & .imgContainerOuter {
    border-radius: 5px;
    padding: 7px;
    border: 2px solid green;
    background-color: #00cb5b;
  }

  & .imgContainerInner {
    border: 2px solid green;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    border-radius: 5px;
  }

  & .allDetails {
    border: 2px solid green;
    height: 400px;
    width: 40%;
  }
`;

export const UserDetails = styled.div`
  margin-top: 10px;
  border: 2px solid red;

  span {
    text-transform: capitalize;
    display: block;
  }
`;
