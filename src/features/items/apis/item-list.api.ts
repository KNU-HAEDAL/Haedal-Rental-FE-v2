import { fetchInstance } from '@/shared';

import { ItemListParams } from './item-list.type';

export const ITEM_LIST_PATH = '/api/rental/itemList';

export const itemListAPI = async ({ itemCategory }: ItemListParams) => {
  const response = await fetchInstance.get(ITEM_LIST_PATH, {
    params: {
      itemCategory,
    },
  });
  return response.data;
};
