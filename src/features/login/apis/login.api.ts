import { fetchInstance } from '@/shared';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface LoginRequest {
  id: string;
  password: string;
}

export const loginApi = async ({ id, password }: LoginRequest) => {
  const response = await fetchInstance.post<LoginResponse>('/api/auth/login', {
    id,
    password,
  });
  return response.data;
};
