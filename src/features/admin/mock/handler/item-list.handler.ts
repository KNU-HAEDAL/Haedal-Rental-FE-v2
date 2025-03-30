import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { getItemListPath } from '../../apis';
import { ITEM_LIST_MOCK } from '../data';

export const itemListHandler = [
  http.get(`${BASE_URL}${getItemListPath}`, async () => {
    return HttpResponse.json(ITEM_LIST_MOCK);
  }),
];
