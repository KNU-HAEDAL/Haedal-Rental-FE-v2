import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { ITEM_LIST_PATH } from '../../apis';
import { ITEM_LIST_MOCK_DATA } from '../data';

export const itemListHandler = [
  http.get(`${BASE_URL}${ITEM_LIST_PATH}`, ({ request }) => {
    const url = new URL(request.url);
    const itemCategory = url.searchParams.get('itemCategory');

    const filteredData = ITEM_LIST_MOCK_DATA.filter(
      (item) => item.itemCategory === itemCategory,
    );

    return HttpResponse.json(filteredData);
  }),
];
