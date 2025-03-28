import { ItemCategory, ItemStatus, fetchInstance } from '@/shared';

interface AddItemRequest {
  itemId: string;
  itemCategory: ItemCategory;
}

export const addItemAPI = async ({ itemId, itemCategory }: AddItemRequest) => {
  const response = await fetchInstance.post('/admin/item', {
    itemId,
    itemCategory,
  });
  return response.data;
};

interface DeleteItemRequest {
  itemId: string;
}

export const deleteItemAPI = async ({ itemId }: DeleteItemRequest) => {
  const response = await fetchInstance.delete(`/admin/item`, {
    params: { itemId },
  });
  return response.data;
};

interface GetItemDetailRequest {
  itemId: string;
}

export const getItemDetailAPI = async ({ itemId }: GetItemDetailRequest) => {
  const response = await fetchInstance.get(`/admin/itemDetail/${itemId}`);
  return response.data;
};

interface GetItemList {
  itemStatus: ItemStatus;
}

export const getItemListAPI = async ({ itemStatus }: GetItemList) => {
  const response = await fetchInstance.get(`/admin/itemList`, {
    params: { itemStatus },
  });
  return response.data;
};
