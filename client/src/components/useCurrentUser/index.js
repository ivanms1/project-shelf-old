import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

import { getToken } from '../../Context/AppContext';

const QUERY_USE_CURRENT_USER = loader('./queryUseCurrentUser.graphql');

function useCurrentUser() {
  const { data, loading, error, refetch } = useQuery(QUERY_USE_CURRENT_USER, {
    skip: !getToken(),
  });

  return {
    loading,
    error,
    currentUser: data?.currentUser ?? null,
    refetch,
  };
}

export default useCurrentUser;
