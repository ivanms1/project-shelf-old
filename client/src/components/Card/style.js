import styled from 'styled-components';

export const CardOuter = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300&display=swap');

  height: 100%;
  position: relative;
  margin: 20px 0;

  .activeContainer {
    position: absolute;
    right: -5px;
  }

  .notActivated {
    background-color: white;
    box-shadow: 1px 1px 20px 0px rgba(45, 78, 255, 0.15);
    border-radius: 5px;
    padding: 10px 10px 10px 10px;

    span {
      color: #d70330;
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

export const CardInner = styled.div`
  max-width: 370px;
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
  background-color: white;
  margin: 20px 7px 20px 7px;
  padding: 20px 20px 20px 20px;

  .imgContainer {
    max-width: 350px;
    max-height: 195px;
    overflow: hidden;
    margin: 20px 0 0 0;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: block;
      object-fit: cover;
    }
  }

  .date {
    color: #2e2e2e;
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    margin: 5px 0 10px 0;

    .header {
      font-size: 16px;
      font-weight: 600;
    }

    @media screen and (max-width: 412px) {
      font-size: 14px;
      font-weight: 400;

      .header {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .description {
    flex: 1;
    color: rgba(0, 0, 0, 0.7);
    color: #2e2e2e;
    font-weight: 400;
    text-align: left;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 22px;
    font-size: 16px;

    @media screen and (max-width: 412px) {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 15px 20px 20px 20px;
    max-width: 320px;

    span {
      font-size: 22px;
    }
  }
`;

export const HeaderCollection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-weight: 600;
    font-size: 21px;
    color: #2e2e2e;
    text-transform: capitalize;
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 20px;
    }
  }
`;

export const Links = styled.div`
  padding: 0px 0;
  display: flex;
  margin: 10px 0 0 0;
  justify-content: space-between;

  a {
    text-align: center;
    padding: 0 5px;
    font-size: 16px;
    font-weight: 500;
    color: #65587f;
    position: relative;
    text-decoration: none;
    cursor: pointer;
  }

  a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 1px;
    left: 0;
    background-color: #d30320;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media screen and (max-width: 412px) {
    margin: 10px 0 0 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    a {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: #65587f;
      cursor: pointer;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 12px 0 0 0;

  .profileContainer {
    width: 100px;
    height: 98px;

    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 10px;
    }
  }

  .profileDetails {
    margin: 0 0 0 5px;

    p {
      color: #2e2e2e;
      font-weight: 600;
      font-size: 18px;
      margin: 3px 0;
      text-transform: capitalize;
    }
  }

  @media screen and (max-width: 412px) {
    .profileContainer {
      width: 85px;
      height: 78px;
    }

    .profileDetails {
      margin: 0 0 0 5px;

      p {
        color: #2e2e2e;
        font-weight: 500;
        font-size: 15px;
        text-align: left;
        text-transform: capitalize;
      }
    }
  }
`;

export const ImgLoading = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
