import { ItemCategory, ItemStatus } from '@/shared';

export type UserRentalItemList = {
  itemId: number;
  itemName: string;
  itemCategory: ItemCategory;
  itemStatus: ItemStatus;
};
