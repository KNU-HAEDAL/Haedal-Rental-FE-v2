import { ItemCategory } from '@/shared';

export interface RentalItemRequest {
  name: string;
  itemCategory: ItemCategory;
  rentalDate: string;
  returnDate: string;
  picture: string;
}
