import { fetchInstance } from '@/shared';

interface SignupRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
}

export const signupAPI = async ({
  email,
  password,
  name,
  phoneNumber,
}: SignupRequest) => {
  const response = await fetchInstance.post('/api/auth/signup', {
    email,
    password,
    name,
    phoneNumber,
  });
  return response.data;
};
