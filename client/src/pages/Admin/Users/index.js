import React from 'react';
import { useTable } from 'react-table';

import TrashPic from '../../../assets/trash.png';
import { ReactComponent as LeftArrow } from '../../../assets/chevron-left.svg';
import { ReactComponent as RightArrow } from '../../../assets/chevron-right.svg';

import { Container, Table, PaginationContainer } from './style';

function Users() {
  const data = React.useMemo(
    () => [
      {
        col1: '132464356',
        col2: 'Uzamaki',
        col3: 'uzaBeastTitan@gmail.com',
        col4: '16',
        col5: 'USER',
        col6: 'Delete',
      },
      {
        col1: '2',
        col2: 'Uzamaki',
        col3: 'uzaBeastTitan@gmail.com',
        col4: '16',
        col5: 'USER',
        col6: 'Delete',
      },
      {
        col1: '3',
        col2: 'Uzamaki',
        col3: 'uzaBeastTitan@gmail.com',
        col4: '16',
        col5: 'USER',
        col6: 'Delete',
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: '#ID',
        accessor: 'col1',
      },
      {
        Header: 'User',
        accessor: 'col2',
      },
      {
        Header: 'Email',
        accessor: 'col3',
      },
      {
        Header: 'Projects',
        accessor: 'col4',
      },
      {
        Header: 'Role',
        accessor: 'col5',
        Cell: (props = { value: 'USER' }) =>
          props.value === 'USER' ? (
            <button className='user'>{props.value}</button>
          ) : (
            <button className='admin'>ADMIN</button>
          ),
      },
      {
        Header: 'Action',
        Cell: () => (
          <div className='buttonHolder'>
            <button>
              <img className='trash' src={TrashPic} alt='delete-button' />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Container>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationContainer>
        <ul>
          <li>
            <button>
              <LeftArrow />
            </button>
          </li>
          <li>
            <button>1</button>
          </li>
          <li>
            <button className='active'>2</button>
          </li>
          <li>
            <button>3</button>
          </li>
          <li>
            <button>4</button>
          </li>
          <li>
            <button>5</button>
          </li>
          <li>
            <button>6</button>
          </li>
          <li>
            <button>7</button>
          </li>
          <li>
            <button>
              <RightArrow />
            </button>
          </li>
        </ul>
      </PaginationContainer>
    </Container>
  );
}

export default Users;
