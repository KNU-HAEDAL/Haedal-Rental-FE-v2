import {
  adminItemListHandler,
  itemListHandler,
  itemRentalHandler,
} from '@/features';

export const handlers = [
  ...itemListHandler,
  ...itemRentalHandler,
  ...adminItemListHandler,
];
