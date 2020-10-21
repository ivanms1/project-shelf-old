import React from 'react';
import { loader } from 'graphql.macro';

import Pagination from './Pagination';
import UserTable from './UserTable';

const GET_ALL_USER_QUERY = loader('./queryGetAllUsers.graphql');

function JsonData(props) {
  const {
    data,
    setData,
    loading,
    setLoading,
    pageCount,
    setPageCount,
    fetchIdRef,
    fetchData,
    count,
  } = Pagination();

  return (
    <UserTable
      data={data}
      fetchData={fetchData}
      loading={loading}
      pageCount={pageCount}
      getPages={count}
    />
  );
}

export default JsonData;
