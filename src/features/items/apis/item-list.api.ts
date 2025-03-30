import { fetchInstance } from '@/shared';

import { ItemListParams } from './item-list.type';

export const itemListPath = '/api/rental/itemList';

export const itemListAPI = async ({ itemCategory }: ItemListParams) => {
  const response = await fetchInstance.get(itemListPath, {
    params: {
      itemCategory,
    },
  });
  return response.data;
};
