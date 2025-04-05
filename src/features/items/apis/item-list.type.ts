import { ItemCategory, ItemStatus } from '@/shared';

export interface ItemListParams {
  itemCategory: ItemCategory;
}

export interface ItemListResponse {
  itemId: number;
  itemName: string;
  itemCategory: ItemCategory;
  itemStatus: ItemStatus;
}
