import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1350px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const ActivatedContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #f7f8fc;

  main {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 35px;

    p {
      font-size: 27px;
      font-weight: 600;
      color: #152c5b;
      letter-spacing: 1px;
    }

    @media screen and (max-width: 500px) {
      p {
        text-align: center;
        font-size: 23px;
      }
    }
  }
`;

export const ProjectCollection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  margin: 0px 0 0 0;

  @media screen and (max-width: 840px) {
    display: flex;
    justify-content: center;
  }
`;

export const customCss = css`
  margin: 20px 0 0 0;
`;
