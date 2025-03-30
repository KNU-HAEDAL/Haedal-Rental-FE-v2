import { useQuery } from '@tanstack/react-query';

import { ItemListParams, itemListAPI, itemListPath } from '../apis';

export const getItemListQueryKey = [itemListPath];

export const useGetItemList = (params: ItemListParams) => {
  return useQuery({
    queryKey: getItemListQueryKey,
    queryFn: () => itemListAPI(params),
  });
};
