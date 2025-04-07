import { GetItemListResponse } from '../../apis';

export type HeaderData = {
  text: string;
  value: string;
};

export const ADMIN_ITEM_TABLE_HEADERS: HeaderData[] = [
  {
    text: '종류',
    value: 'itemCategory',
  },
  {
    text: '이름',
    value: 'itemName',
  },
  {
    text: '상태',
    value: 'itemStatus',
  },
  {
    text: '반납일',
    value: 'returnDate',
  },
  {
    text: '대여자',
    value: 'rentalMemberName',
  },
];

export type BodyData = GetItemListResponse;
