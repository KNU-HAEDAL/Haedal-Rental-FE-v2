import { fetchInstance } from '@/shared';

export const userIdAPI = async () => {
  const response = await fetchInstance.get(`/api/auth/userId`);
  return response.data;
};
