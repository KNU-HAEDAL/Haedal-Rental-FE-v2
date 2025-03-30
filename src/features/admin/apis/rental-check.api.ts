import { fetchInstance } from '@/shared';

import { RentalCheckRequest } from './rental-check.type';

export const RETURN_CHECK_PATH = '/admin/rentalCheck';

export const rentalCheckAPI = async ({ itemId }: RentalCheckRequest) => {
  const response = await fetchInstance.put(RETURN_CHECK_PATH, {
    itemId,
  });
  return response.data;
};
