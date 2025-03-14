import { RouterPath } from '@/shared';

export const getDynamicPath = {
  rentItemDetail: (itemId: string) =>
    RouterPath.ADMIN_ITEM_INFO.replace(':itemId', itemId),
};
