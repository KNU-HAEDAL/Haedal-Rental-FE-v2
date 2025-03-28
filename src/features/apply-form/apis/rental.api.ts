import { ItemCategory, fetchInstance } from '@/shared';

interface RentalItemRequest {
  name: string;
  itemCategory: ItemCategory;
  rentalDate: string;
  returnDate: string;
  picture: string;
}

export const rentalItemApi = async ({
  name,
  itemCategory,
  rentalDate,
  returnDate,
  picture,
}: RentalItemRequest) => {
  const response = await fetchInstance.post('/api/rental', {
    name,
    itemCategory,
    rentalDate,
    returnDate,
    picture,
  });
  return response.data;
};
