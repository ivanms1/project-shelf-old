import styled from 'styled-components';

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  background-color: #f7f8fc;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > p {
    color: #152c5b;
    font-weight: 600;
    font-size: 25px;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    > p {
      text-align: center;
      font-size: 25px;
      margin-bottom: 20px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 15px;

  .noproject {
    margin: 20vh auto;
    font-size: 20px;
    text-align: center;
  }
`;
