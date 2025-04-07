import {
  adminItemsHandler,
  itemDetailHandler,
  itemRentalHandler,
} from '@/features';

export const handlers = [
  ...adminItemsHandler,
  ...itemRentalHandler,
  ...itemDetailHandler,
];
