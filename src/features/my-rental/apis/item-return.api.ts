import { UserRentalItemList } from '@/entities';
import { fetchInstance } from '@/shared';

interface ItemRentalResponse {
  penaltyCount: number;
  userRentalItemList: UserRentalItemList[];
}

export const itemRentalApi = async () => {
  const response = await fetchInstance.get<ItemRentalResponse>('/api/rental');
  return response.data;
};

interface ItemReturnRequest {
  itemId: number;
}

export const itemReturnApi = async ({ itemId }: ItemReturnRequest) => {
  const response = await fetchInstance.post('/api/rental/return', {
    itemId,
  });
  return response.data;
};
