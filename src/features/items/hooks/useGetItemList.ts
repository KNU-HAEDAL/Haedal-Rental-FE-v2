import { useQuery } from '@tanstack/react-query';

import { ITEM_LIST_PATH, ItemListParams, itemListAPI } from '../apis';

export const getItemListQueryKey = [ITEM_LIST_PATH];

export const useGetItemList = (params: ItemListParams) => {
  return useQuery({
    queryKey: getItemListQueryKey,
    queryFn: () => itemListAPI(params),
  });
};
