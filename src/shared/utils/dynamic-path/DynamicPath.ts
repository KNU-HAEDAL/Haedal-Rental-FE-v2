import { RouterPath } from '@/shared';

export const getDynamicPath = {
  rentedItemDetail: (itemId: string) =>
    RouterPath.ADMIN_RENTED_ITEM_DETAIL.replace(':itemId', itemId),
};
