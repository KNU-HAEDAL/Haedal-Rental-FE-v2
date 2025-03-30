import { fetchInstance } from '@/shared';

export const refreshTokenPath = '/api/auth/refresh';

export const refreshTokenAPI = async () => {
  const response = await fetchInstance.post(refreshTokenPath);
  return response.data;
};
