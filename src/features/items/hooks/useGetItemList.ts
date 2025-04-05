import { useQuery } from '@tanstack/react-query';

import { ITEM_LIST_PATH, ItemListParams, itemListAPI } from '../apis';

export const getItemListQueryKey = (params: ItemListParams) => [
  ITEM_LIST_PATH,
  params,
];

export const useGetItemList = (params: ItemListParams) => {
  return useQuery({
    queryKey: getItemListQueryKey(params),
    queryFn: () => itemListAPI(params),
  });
};
