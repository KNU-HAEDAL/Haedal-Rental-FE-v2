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
  const userName = response.data.userName || '사용자';
  const role = response.data.role || 'ROLE_USER';

  if (!accessToken || !refreshToken) {
    throw new Error('로그인 실패. 재시도해주세요.');
  }

  return { accessToken, refreshToken, userName, role };
};
