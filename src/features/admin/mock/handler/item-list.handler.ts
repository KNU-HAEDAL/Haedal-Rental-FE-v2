import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { GET_ITEM_LIST_PATH } from '../../apis';
import { ITEM_LIST_MOCK } from '../data';

export const itemListHandler = [
  http.get(`${BASE_URL}${GET_ITEM_LIST_PATH}`, async () => {
    return HttpResponse.json(ITEM_LIST_MOCK);
  }),
];
