import styled, { css } from 'styled-components';

const colors = {
  green: 'rgba(0, 203, 91, 0.7)',
  red: ' rgba(237, 44, 73, 0.7)',
};

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
  padding-top: 100px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;

  & .imgUserDetails {
    width: 55%;
  }

  & .imgContainerInner {
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const ImgContainerOuter = styled.div`
  border-radius: 5px;
  padding: 7px;
  background-color: ${(props) => (props.status ? colors.green : colors.red)};
`;

export const UserDetails = styled.div`
  margin-top: 10px;

  span {
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  & .fullName {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 30px;
  }
`;

export const AllDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;

  span {
    display: block;
  }

  & .fullName {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 35px;
  }

  & .date {
    font-size: 20px;
  }

  & .linksContainer {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;

    span {
      display: flex;
      flex-direction: row;

      a {
        margin-left: 10px;
      }
    }
  }

  & .description {
    margin-top: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;

export const CustomDeleteButtonCSS = css`
  letter-spacing: 1px;
  font-weight: 500;
  max-width: 200px;
`;

export const Status = styled.div`
  margin-top: 5px;
  width: 100px;
  font-weight: 600;
  border-radius: 3px;
  padding: 5px 0;
  font-size: 14px;
  background-color: ${(props) =>
    props.status == 'ADMIN' ? '#D1383D' : '#00CB5B'};
  color: white;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  text-align: center;
`;
