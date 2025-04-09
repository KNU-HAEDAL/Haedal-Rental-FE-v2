import { fetchInstance } from '@/shared';

import { LoginRequest, LoginResponse } from './login.type';

export const loginPath = '/api/auth/login';

export const loginApi = async ({
  id,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await fetchInstance.post<LoginResponse>(loginPath, {
    id,
    password,
  });

  const accessToken = response.headers['authorization']?.replace('Bearer ', '');
  const refreshToken = response.headers['refresh-token'];

  return { accessToken, refreshToken };
};
