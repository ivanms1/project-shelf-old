import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0;
  flex: 1;
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f7f8fc;
`;

export const PROFILE_BANNER_WRAPPER = styled.div`
  width: 100%;
  background-color: #f7f8fc;
  position: relative;
`;

export const PROFILE_BANNER = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 7px;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: fill;
  }
`;

export const EDIT_WRAPPER = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  padding: 7px;
  display: none;

  :active {
    transform: scale(0.96);
    transition: 0.1s linear;
  }

  ${PROFILE_BANNER}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PROFILE_CARD = styled.div`
  position: absolute;
  bottom: -50%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  box-shadow: 10px 10px 40px 4px rgb(45 78 255 / 15%);
  padding: 10px 10px;
  background-color: white;
`;

export const PROFILE_PIC = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: #f7f8fc;
  overflow: hidden;
  border: 5px solid #f7f8fc;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const PROFILE_NAME = styled.span`
  display: block;
  margin-top: 10px;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 17px;
`;

export const UserName = styled.span`
  display: block;
  letter-spacing: 1.1px;
  line-height: 13px;
  font-weight: 400;
  font-family: 'Poppins';
  font-size: 12px;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    color: hsl(212, 97%, 43%);
    opacity: 1;
    font-weight: 500;
    transition: all 0.2s linear;
  }
`;

export const Follow = styled.button`
  background-color: #fafbfc;
  border: 1px solid #1b1f2326;
  padding: 6px 12px;
  font-family: 'Poppins';
  width: 100%;
  color: black;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  margin-top: 20px;

  &:focus {
    outline: none;
    border: 1px solid #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }

  :active {
    transform: scale(0.96);
    transition: all 0.2s linear;
  }
`;

export const PROFILE_DETAILS = styled.div`
  width: 100%;
  margin-top: 10px;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 7px;

  padding: 10px 10px;
`;

export const FOLLOWERS_WRAPPER = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:last-child {
    /* border: 2px solid green; */
    max-width: 50px;
  }
  /* border: 2px solid green; */
`;

export const FOLLOW_DETAILS = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid green; */

  span:first-child {
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
  }

  span:last-child {
    font-size: 13px;
    font-weight: 500;
    color: black;
  }
`;

export const FLEX_ROW = styled.div`
  width: 100%;
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2px 0;

  span {
    word-break: break-word;
    color: #6a737d;
    overflow: hidden;
    font-size: 14px;
    line-height: 21px;
    margin-left: 10px;
  }
`;
