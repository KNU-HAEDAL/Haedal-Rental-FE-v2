import { fetchInstance } from '@/shared';

export const REFRESH_TOKEN_PATH = '/api/auth/refresh';

export const refreshTokenAPI = async () => {
  const response = await fetchInstance.post(REFRESH_TOKEN_PATH);
  return response.data;
};
