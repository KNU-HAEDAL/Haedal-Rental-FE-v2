import { fetchInstance } from '@/shared';

import { ItemRentalResponse, ItemReturnRequest } from './item-return.type';

export const ITEM_RENTAL_PATH = '/api/rental';

export const itemRentalApi = async () => {
  const response =
    await fetchInstance.get<ItemRentalResponse>(ITEM_RENTAL_PATH);
  return response.data;
};

export const ITEM_RETURN_PATH = '/api/rental/return';

export const itemReturnApi = async ({ itemId }: ItemReturnRequest) => {
  const response = await fetchInstance.post(ITEM_RETURN_PATH, {
    itemId,
  });
  return response.data;
};
