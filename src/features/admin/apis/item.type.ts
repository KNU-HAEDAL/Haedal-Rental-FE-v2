import { ItemCategory, ItemStatus } from '@/shared';

export interface AddItemRequest {
  itemId: string;
  itemCategory: ItemCategory;
}

export interface DeleteItemRequest {
  itemId: string;
}

export interface GetItemDetailRequest {
  itemId: string;
}

export interface GetItemListParams {
  itemStatus: ItemStatus;
}
