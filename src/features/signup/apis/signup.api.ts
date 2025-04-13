import { fetchInstance } from '@/shared';

import { SignupRequest } from './signup.type';

export const SIGNUP_PATH = '/api/auth/signup';

export const signupAPI = async ({
  id,
  password,
  name,
  phoneNumber,
}: SignupRequest) => {
  const response = await fetchInstance.post(SIGNUP_PATH, {
    id,
    password,
    name,
    phoneNumber,
  });
  return response.data;
};
