import { useQuery } from '@tanstack/react-query';

import { GET_ITEM_LIST_PATH, GetItemListParams, getItemListAPI } from '../apis';

export const getAdminItemListQueryKey = (itemStatus: GetItemListParams) => [
  GET_ITEM_LIST_PATH,
  itemStatus,
];
export const useGetAdminItemList = (itemStatus: GetItemListParams) => {
  return useQuery({
    queryKey: getAdminItemListQueryKey(itemStatus),
    queryFn: () => getItemListAPI(itemStatus),
  });
};
