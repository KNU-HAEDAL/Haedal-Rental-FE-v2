import { fetchInstance } from '@/shared';

import {
  AddItemRequest,
  DeleteItemRequest,
  GetItemDetailRequest,
  GetItemDetailResponse,
  GetItemListParams,
  GetItemListResponse,
} from './item.type';

export const ADD_ITEM_PATH = '/admin/item';

export const addItemAPI = async ({ itemId, itemCategory }: AddItemRequest) => {
  const response = await fetchInstance.post(ADD_ITEM_PATH, {
    itemId,
    itemCategory,
  });
  return response.data;
};

export const DELETE_ITEM_PATH = '/admin/item';

export const deleteItemAPI = async ({ itemId }: DeleteItemRequest) => {
  const response = await fetchInstance.delete(DELETE_ITEM_PATH, {
    params: { itemId },
  });
  return response.data;
};

export const GET_ITEM_DETAIL_PATH = ({ itemId }: GetItemDetailRequest) =>
  `/admin/itemDetail/${itemId}`;

export const getItemDetailAPI = async ({ itemId }: GetItemDetailRequest) => {
  const response = await fetchInstance.get<GetItemDetailResponse>(
    GET_ITEM_DETAIL_PATH({ itemId }),
  );
  return response.data;
};

export const GET_ITEM_LIST_PATH = '/admin/itemList';

export const getItemListAPI = async ({ itemStatus }: GetItemListParams) => {
  const response = await fetchInstance.get<GetItemListResponse>(
    GET_ITEM_LIST_PATH,
    {
      params: { itemStatus },
    },
  );
  return response.data;
};
