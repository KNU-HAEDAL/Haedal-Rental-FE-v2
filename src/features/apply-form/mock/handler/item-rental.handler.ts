import { HttpResponse, http } from 'msw';

import { BASE_URL, ItemCategory } from '@/shared';

import { ITEM_RENTAL_PATH, RentalItemRequest } from '../../apis';
import { ITEM_RENTAL_DATA } from '../data';

export const itemRentalHandler = [
  http.post(`${BASE_URL}${ITEM_RENTAL_PATH}`, async ({ request }) => {
    const formData = await request.formData();

    const name = formData.get('name');
    const itemCategory = formData.get('itemCategory');
    const rentalDate = formData.get('rentalDate');
    const returnDate = formData.get('returnDate');
    const picture = formData.get('picture');

    if (!name || !itemCategory || !rentalDate || !returnDate || !picture) {
      return new HttpResponse('Invalid data', { status: 400 });
    }

    if (!(picture instanceof File)) {
      return new HttpResponse('Uploaded picture is not a File', {
        status: 400,
      });
    }

    const newItem: RentalItemRequest = {
      name: name.toString(),
      itemCategory: itemCategory.toString() as ItemCategory,
      rentalDate: rentalDate.toString(),
      returnDate: returnDate.toString(),
      picture,
    };

    ITEM_RENTAL_DATA.push(newItem);

    return HttpResponse.json({ success: true, data: newItem }, { status: 201 });
  }),
];
