import React from "react";
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import Loader from '../../components/Loader/Loader';
import Pagination from './Pagination';
import UserTable from './UserTable';

const GET_ALL_USER_QUERY = loader('./queryGetAllUsers.graphql');

function JsonData(props) {
  // const { data = {}, loading, error } = useQuery(GET_ALL_USER_QUERY);

  // if (loading) {
  //   return <Loader/>
  // }

  // const { user } = data;

  const {data,setData,loading,setLoading,pageCount,setPageCount,fetchIdRef,fetchData,count} = Pagination()
  

  console.log(count);

  return <UserTable data={data} fetchData={fetchData} loading={loading} pageCount={pageCount} getPages={count}/>
  
}

export default JsonData;
