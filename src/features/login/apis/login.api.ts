import { fetchInstance } from '@/shared';

import { LoginRequest, LoginResponse } from './login.type';

export const loginPath = '/api/auth/login';

export const loginApi = async ({ id, password }: LoginRequest) => {
  const response = await fetchInstance.post<LoginResponse>(loginPath, {
    id,
    password,
  });
  return response.data;
};
