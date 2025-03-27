import { fetchInstance } from '@/shared';

interface DuplicatePhoneNumberRequest {
  phoneNumber: string;
}

export const duplicatePhoneNumberAPI = async ({
  phoneNumber,
}: DuplicatePhoneNumberRequest) => {
  const response = await fetchInstance.post(`/api/auth/duplicate/phoneNumber`, {
    phoneNumber,
  });
  return response.data;
};

interface DuplicateIdRequest {
  id: string;
}

export const duplicateIdAPI = async ({ id }: DuplicateIdRequest) => {
  const response = await fetchInstance.post(`/api/auth/duplicate/id`, {
    id,
  });
  return response.data;
};
