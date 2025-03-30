import { fetchInstance } from '@/shared';

import {
  DuplicateIdRequest,
  DuplicatePhoneNumberRequest,
} from './duplicate-check.type';

export const DUPLICATE_PHONE_NUMBER_PATH = '/api/auth/duplicate/phoneNumber';

export const duplicatePhoneNumberAPI = async ({
  phoneNumber,
}: DuplicatePhoneNumberRequest) => {
  const response = await fetchInstance.post(DUPLICATE_PHONE_NUMBER_PATH, {
    phoneNumber,
  });
  return response.data;
};

export const DUPLICATE_ID_PATH = '/api/auth/duplicate/id';

export const duplicateIdAPI = async ({ id }: DuplicateIdRequest) => {
  const response = await fetchInstance.post(DUPLICATE_ID_PATH, {
    id,
  });
  return response.data;
};
