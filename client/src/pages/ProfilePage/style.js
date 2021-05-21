import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0;
  flex: 1;
  width: 100%;
  height: auto;
  /* border: 1px solid green; */
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PROFILE_BANNER_WRAPPER = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7f8fc;
  position: relative;
`;

export const PROFILE_BANNER = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  user-select: none;
  background-color: white;

  img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const EDIT_WRAPPER = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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

export const Layout = styled.div`
  /* border: 2px solid green; */
  flex: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
`;

export const LEFT_SIDE = styled.div`
  /* border: 2px solid red; */
  flex: 1;
  width: 100%;
`;

export const RIGHT_SIDE = styled.div`
  /* border: 2px solid yellow; */
  width: 100%;
  overflow: auto;
`;
