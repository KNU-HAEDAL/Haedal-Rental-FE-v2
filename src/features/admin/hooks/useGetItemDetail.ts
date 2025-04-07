import { useQuery } from '@tanstack/react-query';

import {
  GET_ITEM_DETAIL_PATH,
  GetItemDetailRequest,
  getItemDetailAPI,
} from '../apis';

export const getItemDetailQueryKey = ({ itemId }: GetItemDetailRequest) => [
  GET_ITEM_DETAIL_PATH({ itemId }),
];

export const useGetItemDetail = ({ itemId }: GetItemDetailRequest) => {
  return useQuery({
    queryKey: getItemDetailQueryKey({ itemId }),
    queryFn: () => getItemDetailAPI({ itemId }),
  });
};
