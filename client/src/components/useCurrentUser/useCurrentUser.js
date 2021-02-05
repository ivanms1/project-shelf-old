import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';

const QUERY_USE_CURRENT_USER = loader('./queryUseCurrentUser.graphql');

function useCurrentUser() {
  const { data = {}, loading, error } = useQuery(QUERY_USE_CURRENT_USER);

  return {
    loading,
    error,
    currentUser: data.currentUser || {},
  };
}

export default useCurrentUser;
