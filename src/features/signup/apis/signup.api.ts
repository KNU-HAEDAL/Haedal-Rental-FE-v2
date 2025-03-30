import { fetchInstance } from '@/shared';

import { SignupRequest } from './signup.type';

export const SIGNUP_PATH = '/api/auth/signup';

export const signupAPI = async ({
  email,
  password,
  name,
  phoneNumber,
}: SignupRequest) => {
  const response = await fetchInstance.post(SIGNUP_PATH, {
    email,
    password,
    name,
    phoneNumber,
  });
  return response.data;
};
