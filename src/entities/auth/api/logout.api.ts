import { fetchInstance } from '@/shared';

export const LogoutAPI = async () => {
  const response = await fetchInstance.get('/api/auth/logout');
  return response.data;
};
