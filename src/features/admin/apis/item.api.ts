import { ItemCategory, ItemStatus, fetchInstance } from '@/shared';

export interface AddItemRequest {
  itemId: string;
  itemCategory: ItemCategory;
}

export const addItemPath = '/admin/item';

export const addItemAPI = async ({ itemId, itemCategory }: AddItemRequest) => {
  const response = await fetchInstance.post(addItemPath, {
    itemId,
    itemCategory,
  });
  return response.data;
};

export interface DeleteItemRequest {
  itemId: string;
}

export const deleteItemPath = '/admin/item';

export const deleteItemAPI = async ({ itemId }: DeleteItemRequest) => {
  const response = await fetchInstance.delete(deleteItemPath, {
    params: { itemId },
  });
  return response.data;
};

export interface GetItemDetailRequest {
  itemId: string;
}

export const getItemDetailPath = ({ itemId }: GetItemDetailRequest) =>
  `/admin/itemDetail/${itemId}`;

export const getItemDetailAPI = async ({ itemId }: GetItemDetailRequest) => {
  const response = await fetchInstance.get(getItemDetailPath({ itemId }));
  return response.data;
};

export interface GetItemListParams {
  itemStatus: ItemStatus;
}

export const getItemListPath = '/admin/itemList';

export const getItemListAPI = async ({ itemStatus }: GetItemListParams) => {
  const response = await fetchInstance.get(getItemListPath, {
    params: { itemStatus },
  });
  return response.data;
};
