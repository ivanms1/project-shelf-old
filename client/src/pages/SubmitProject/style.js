import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: #f7f8fc;
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  max-width: 1250px;
  margin: 0 auto;

  > p {
    text-align: center;
    padding: 50px 20px;

    span {
      font-weight: 600;
      font-size: 26px;
    }

    span:first-child {
      color: #152c5b;
    }
    span:last-child {
      color: #152c5b;
    }
  }

  @media screen and (max-width: 870px) {
    p {
      span {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    p {
      span {
        font-size: 18px;
      }
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 506px;
  border-radius: 7px;
  box-shadow: 9px 9px 25px 0px rgb(0, 0, 0, 0.25);
  padding: 0px 20px 20px 20px;

  p {
    margin: 10px 0;
  }

  @media screen and (max-width: 420px) {
    span {
      line-height: 1.1em;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  height: 331px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media screen and (max-width: 450px) {
    height: 250px;
  }
`;

export const Description = styled.div`
  width: 100%;
  margin-top: 20px;

  > span {
    font-weight: 600;
    color: #e85f99;
    font-size: 30px;
  }

  .first {
    font-weight: 500;
    font-size: 20px;
    color: #e85f99;
    word-wrap: break-word;
  }

  .second {
    color: #65587f;
    font-size: 20px;
    font-weight: 500;
    word-wrap: break-word;
  }

  .desc {
    color: #010101;
    font-size: 20px;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export const Collection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  > div {
    max-width: 220px;
  }

  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      max-width: 100%;
    }
  }
`;
