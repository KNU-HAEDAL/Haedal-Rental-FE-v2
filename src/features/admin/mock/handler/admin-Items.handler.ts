import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { GET_ITEM_LIST_PATH } from '../../apis';
import { ADMIN_ITEMS_MOCK } from '../data';

export const adminItemsHandler = [
  http.get(`${BASE_URL}${GET_ITEM_LIST_PATH}`, async ({ request }) => {
    const url = new URL(request.url);
    const itemStatus = url.searchParams.get('itemStatus');

    if (!itemStatus) {
      return HttpResponse.json(ADMIN_ITEMS_MOCK);
    }

    const filteredItems = ADMIN_ITEMS_MOCK.filter(
      (item) => item.itemStatus === itemStatus,
    );

    return HttpResponse.json(filteredItems);
  }),
];
