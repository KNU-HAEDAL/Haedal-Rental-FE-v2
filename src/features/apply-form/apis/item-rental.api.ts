import { multipartInstance } from '@/shared';

import { RentalItemRequest } from './item-rental.type';

export const ITEM_RENTAL_PATH = '/admin/rental';

export const itemRentalAPI = async (data: RentalItemRequest) => {
  const formData = new FormData();

  formData.append('name', data.name);
  formData.append('itemCategory', data.itemCategory);
  formData.append('rentalDate', data.rentalDate);
  formData.append('returnDate', data.returnDate);
  formData.append('picture', data.picture);

  const response = await multipartInstance.post(ITEM_RENTAL_PATH, formData);

  return response.data;
};
