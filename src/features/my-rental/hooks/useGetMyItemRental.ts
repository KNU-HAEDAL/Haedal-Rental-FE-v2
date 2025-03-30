import { useQuery } from '@tanstack/react-query';

import { itemRentalApi, itemRentalPath } from '../apis';

export const getMyItemRentalQueryKey = [itemRentalPath];

export const useGetMyItemRental = () => {
  return useQuery({
    queryKey: getMyItemRentalQueryKey,
    queryFn: itemRentalApi,
  });
};
