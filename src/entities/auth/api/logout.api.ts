import { fetchInstance } from '@/shared';

export const logoutAPI = async () => {
  const response = await fetchInstance.get('/api/auth/logout');
  return response.data;
};
