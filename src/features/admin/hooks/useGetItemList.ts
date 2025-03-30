import { useQuery } from '@tanstack/react-query';

import { GET_ITEM_LIST_PATH, GetItemListParams, getItemListAPI } from '../apis';

export const getItemListQueryKey = [GET_ITEM_LIST_PATH];

export const useGetItemList = (itemStatus: GetItemListParams) => {
  return useQuery({
    queryKey: getItemListQueryKey,
    queryFn: () => getItemListAPI(itemStatus),
  });
};
