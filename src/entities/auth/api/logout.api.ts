import { fetchInstance } from '@/shared';

export const LOGOUT_PATH = '/api/auth/logout';

export const logoutAPI = async () => {
  const response = await fetchInstance.get(LOGOUT_PATH);
  return response.data;
};
