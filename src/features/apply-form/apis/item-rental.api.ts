import { fetchInstance } from '@/shared';

import { RentalItemRequest } from './item-rental.type';

export const itemRentalPath = '/admin/rental';

export const itemRentalAPI = async ({
  name,
  itemCategory,
  rentalDate,
  returnDate,
  picture,
}: RentalItemRequest) => {
  const response = await fetchInstance.post(itemRentalPath, {
    name,
    itemCategory,
    rentalDate,
    returnDate,
    picture,
  });
  return response.data;
};
