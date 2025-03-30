import { useQuery } from '@tanstack/react-query';

import { getUserIdAPI, getUserIdPath } from '../api';

export const getUserIdQueryKey = [getUserIdPath];

export const useGetUserId = () => {
  return useQuery({
    queryKey: getUserIdQueryKey,
    queryFn: getUserIdAPI,
  });
};
