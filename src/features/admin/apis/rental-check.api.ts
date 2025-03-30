import { fetchInstance } from '@/shared';

import { RentalCheckRequest } from './rental-check.type';

export const rentalCheckPath = '/admin/rentalCheck';

export const rentalCheckAPI = async ({ itemId }: RentalCheckRequest) => {
  const response = await fetchInstance.put(rentalCheckPath, {
    itemId,
  });
  return response.data;
};
