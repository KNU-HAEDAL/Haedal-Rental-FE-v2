import { useQuery } from '@tanstack/react-query';

import { GET_USER_ID_PATH, getUserIdAPI } from '../api';

export const getUserIdQueryKey = [GET_USER_ID_PATH];

export const useGetUserId = () => {
  return useQuery({
    queryKey: getUserIdQueryKey,
    queryFn: getUserIdAPI,
  });
};
