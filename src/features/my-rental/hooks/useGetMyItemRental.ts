import { useQuery } from '@tanstack/react-query';

import { ITEM_RENTAL_PATH, itemRentalApi } from '../apis';

export const getMyItemRentalQueryKey = [ITEM_RENTAL_PATH];

export const useGetMyItemRental = () => {
  return useQuery({
    queryKey: getMyItemRentalQueryKey,
    queryFn: itemRentalApi,
  });
};
