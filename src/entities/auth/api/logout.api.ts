import { fetchInstance } from '@/shared';

export const logoutPath = '/api/auth/logout';

export const logoutAPI = async () => {
  const response = await fetchInstance.get(logoutPath);
  return response.data;
};
