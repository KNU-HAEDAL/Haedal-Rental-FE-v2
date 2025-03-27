import { fetchInstance } from '@/shared';

export const refreshTokenAPI = async () => {
  const response = await fetchInstance.post('/api/auth/refresh');
  return response.data;
};
