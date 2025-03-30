import { adminItemListHandler, itemListHandler } from '@/features';

export const handlers = [...adminItemListHandler, ...itemListHandler];
