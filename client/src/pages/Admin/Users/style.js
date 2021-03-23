import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
`;

export const Table = styled.table`
  border-spacing: 0 1rem;
  border-radius: 7px;

  thead {
    background: #20c997;
    color: white;
    tr {
      th {
        font-weight: 400;
        font-size: 1rem;
        padding: 20px;
      }
    }
  }
  tbody {
    background-color: #fff;
    tr {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 1rem;
      td {
        font-weight: normal;
        font-size: 14px;
        padding: 15px;
        text-align: center;
      }
    }
  }

  .buttonHolder {
    min-width: 70px;
    .trash {
      transition: all 0.2s ease-out;
      padding: 0 12px;
    }
    .trash:hover {
      border-radius: 50px;
      transform: scale(1.2);
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  button {
    border: none;
    background-color: transparent;
    outline: none;
  }

  .user {
    background: rgba(204, 250, 211, 0.64);
    padding: 10px 20px;
    color: #0f8028;
  }
`;
