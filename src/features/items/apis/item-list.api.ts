import { ItemCategory, fetchInstance } from '@/shared';

interface ItemListParams {
  itemCategory: ItemCategory;
}

export const itemListAPI = async ({ itemCategory }: ItemListParams) => {
  const response = await fetchInstance.get('/api/rental/itemList', {
    params: {
      itemCategory,
    },
  });
  return response.data;
};
