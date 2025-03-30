import { fetchInstance } from '@/shared';

export const getUserIdPath = '/api/auth/userId';

export const getUserIdAPI = async () => {
  const response = await fetchInstance.get(getUserIdPath);
  return response.data;
};
