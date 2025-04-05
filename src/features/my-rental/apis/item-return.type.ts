import { UserRentalItemList } from '@/entities';

export interface ItemRentalResponse {
  penaltyCount: number;
  userRentalItemList: UserRentalItemList[];
}

export interface ItemReturnRequest {
  itemId: number;
}
