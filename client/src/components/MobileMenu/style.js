import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 0px;
   ul {
    position: relative;
    top: 0px;
    font-size: 24px;
    padding: 0px;
  }
   li {
    list-style: none;
    margin: 10px 0px;
    padding: 0;
    cursor: pointer;

    &:hover{
      color:#2ECC71;
      transition:0.3s linear;
    }
  }
`;