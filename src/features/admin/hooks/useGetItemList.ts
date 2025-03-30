import { useQuery } from '@tanstack/react-query';

import { GetItemListParams, getItemListAPI, getItemListPath } from '../apis';

export const getItemListQueryKey = [getItemListPath];

export const useGetItemList = (itemStatus: GetItemListParams) => {
  return useQuery({
    queryKey: getItemListQueryKey,
    queryFn: () => getItemListAPI(itemStatus),
  });
};
