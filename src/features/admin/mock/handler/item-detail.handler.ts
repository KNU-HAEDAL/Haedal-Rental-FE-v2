import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { GET_ITEM_DETAIL_PATH } from '../../apis';
import { ITEM_DETAIL_MOCK } from '../data';

export const itemDetailHandler = [
  http.get(
    `${BASE_URL}${GET_ITEM_DETAIL_PATH({ itemId: ':itemId' })}`,
    async ({ params }) => {
      const { itemId } = params;

      if (!itemId) {
        return new HttpResponse('Missing itemId', { status: 400 });
      }

      const itemDetail = ITEM_DETAIL_MOCK.find(
        (item) => item.itemId === itemId,
      );

      if (!itemDetail) {
        return new HttpResponse('Item not found', { status: 404 });
      }

      return HttpResponse.json(itemDetail);
    },
  ),
];
