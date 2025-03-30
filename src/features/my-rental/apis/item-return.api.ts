import { fetchInstance } from '@/shared';

import { ItemRentalResponse, ItemReturnRequest } from './item-return.type';

export const itemRentalPath = '/api/rental';

export const itemRentalApi = async () => {
  const response = await fetchInstance.get<ItemRentalResponse>(itemRentalPath);
  return response.data;
};

export const itemReturnPath = '/api/rental/return';

export const itemReturnApi = async ({ itemId }: ItemReturnRequest) => {
  const response = await fetchInstance.post(itemReturnPath, {
    itemId,
  });
  return response.data;
};
