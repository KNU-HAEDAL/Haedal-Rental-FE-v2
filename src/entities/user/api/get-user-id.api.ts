import { fetchInstance } from '@/shared';

export const GET_USER_ID_PATH = '/api/auth/userId';

export const getUserIdAPI = async () => {
  const response = await fetchInstance.get(GET_USER_ID_PATH);
  return response.data;
};
