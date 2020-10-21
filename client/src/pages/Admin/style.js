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

export const TabContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1350px;

  ul {
    display: flex;

    li {
      border: 1px solid rgba(0, 0, 0, 0.125);

      button {
        height: 100%;
        color: #152c5b;
        font-size: 16px;
        padding: 11px 20px 9px 20px;
        outline: none;
        background-color: transparent;
        border: none;
        letter-spacing: 1px;
      }
    }
    li:first-child {
      border-right: none;
    }
    li:last-child {
      border-left: none;
    }
  }

  @media screen and (max-width: 412px) {
    ul {
      li {
      }
      button {
        font-size: 14px !important;
      }
    }
  }

  @media screen and (max-width: 840px) {
    display: flex;
    justify-content: center;
    transition: all 0.3s linear;
  }
`;
