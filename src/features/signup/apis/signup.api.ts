import { fetchInstance } from '@/shared';

import { SignupRequest } from './signup.type';

export const signupPath = '/api/auth/signup';

export const signupAPI = async ({
  email,
  password,
  name,
  phoneNumber,
}: SignupRequest) => {
  const response = await fetchInstance.post(signupPath, {
    email,
    password,
    name,
    phoneNumber,
  });
  return response.data;
};
