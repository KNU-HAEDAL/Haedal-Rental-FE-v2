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

export interface GetItemDetailResponse {
  rentalMemberName: string;
  rentalMemberPhoneNumber: string;
  itemName: string;
  itemCategory: ItemCategory;
  itemId: string;
  rentalDate: string;
  returnDate: string;
  picture: string;
}

export interface GetItemListParams {
  itemStatus: ItemStatus;
}

export interface GetItemListResponse {
  itemCategory: ItemCategory;
  itemName: string;
  itemStatus: ItemStatus;
  itemId: string;
  returnDate: string;
  rentalMemberName: string;
}
