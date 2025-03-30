import { fetchInstance } from '@/shared';

import { RentalItemRequest } from './item-rental.type';

export const ITEM_RENTAL_PATH = '/admin/rental';

export const itemRentalAPI = async ({
  name,
  itemCategory,
  rentalDate,
  returnDate,
  picture,
}: RentalItemRequest) => {
  const response = await fetchInstance.post(ITEM_RENTAL_PATH, {
    name,
    itemCategory,
    rentalDate,
    returnDate,
    picture,
  });
  return response.data;
};
