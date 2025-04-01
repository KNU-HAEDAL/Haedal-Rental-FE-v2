import { itemRentalHandler } from '@/features/apply-form/mock';

import { itemListHandler } from '@/features';

export const handlers = [...itemListHandler, ...itemRentalHandler];
