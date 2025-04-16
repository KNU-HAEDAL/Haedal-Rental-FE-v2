import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { GET_ITEM_LIST_PATH } from '../../apis';
import { ADMIN_ITEMS_MOCK } from '../data';

export const adminItemListHandler = [
  http.get(`${BASE_URL}${GET_ITEM_LIST_PATH}`, async () => {
    return HttpResponse.json(ADMIN_ITEMS_MOCK);
  }),
];
