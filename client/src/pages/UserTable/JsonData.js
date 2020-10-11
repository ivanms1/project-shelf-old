import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_ALL_USER_QUERY = loader('./queryGetAllUsers.graphql');

function JsonData(props) {
  const { data = {}, loading, error } = useQuery(GET_ALL_USER_QUERY);

  return {
    loading,
    data,
    error,
    allUsers: data.user || {},
  };
}

export default JsonData;
