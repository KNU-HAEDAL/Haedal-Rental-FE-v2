import { fetchInstance } from '@/shared';

interface RentalCheckRequest {
  itemId: string;
}

export const rentalCheckAPI = async ({ itemId }: RentalCheckRequest) => {
  const response = await fetchInstance.put('/admin/rentalCheck', {
    itemId,
  });
  return response.data;
};
