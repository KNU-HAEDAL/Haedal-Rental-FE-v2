import { fetchInstance } from '@/shared';

import {
  DuplicateIdRequest,
  DuplicatePhoneNumberRequest,
} from './duplicate-check.type';

export const duplicatePhoneNumberPath = '/api/auth/duplicate/phoneNumber';

export const duplicatePhoneNumberAPI = async ({
  phoneNumber,
}: DuplicatePhoneNumberRequest) => {
  const response = await fetchInstance.post(duplicatePhoneNumberPath, {
    phoneNumber,
  });
  return response.data;
};

export const duplicateIdPath = '/api/auth/duplicate/id';

export const duplicateIdAPI = async ({ id }: DuplicateIdRequest) => {
  const response = await fetchInstance.post(duplicateIdPath, {
    id,
  });
  return response.data;
};
