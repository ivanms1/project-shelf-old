import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';

import ProfilePic from '../../assets/rick.png';
import EditPic from '../../assets/edit.png';
import TrashPic from '../../assets/trash.png';

import { Styles } from './style';

function UserTable({ data, onFetchData }) {
  const [tabledata, setTabledata] = useState(data);

  function deleteuser(userId) {
    alert(userId);
  }
  const columns = [
    {
      Header: <input type='checkbox'></input>,
      accessor: 'check',
    },
    {
      Header: 'Id',
      id: 'row',
      Cell: ({ row }) => {
        return <div>{row.index + 1}</div>;
      },
    },

    {
      Header: 'Profile',
      accessor: (d) => (
        <div className='profile'>
          <div className='imgContainer'>
            <img src={ProfilePic}></img>
          </div>
          <div>
            <div className='name'>
              {d.name} {d.lastName}
            </div>
            <div className='email'>{d.email}</div>
          </div>
        </div>
      ),
    },
    {
      Header: 'Projects',
      accessor: (d) => {
        if (d.projects.length == 0) {
          return <span>0</span>;
        } else {
          return <span>{d.projects.length}</span>;
        }
      },
    },

    {
      Header: 'Role',
      accessor: 'role',
      Cell: (props) =>
        props.value === 'USER' ? (
          <button className='user'>USER</button>
        ) : (
          <button className='admin'>ADMIN</button>
        ),
    },
    {
      Header: 'User ID',
      accessor: (d) => d.id,
    },
    {
      Header: 'Actions',
      Cell: ({ cell }) => (
        <div className='buttonHolder'>
          <button>
            <img className='edit' src={EditPic}></img>
          </button>

          <button onClick={() => deleteuser(cell.row.original.id)}>
            <img className='trash' src={TrashPic}></img>
          </button>
        </div>
      ),
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div>
      <p>this is a table</p>
      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
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
        </table>
      </Styles>
    </div>
  );
}

export default UserTable;
