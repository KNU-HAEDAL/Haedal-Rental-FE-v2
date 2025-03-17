export type IHeaderData = {
  text: string;
  value: string;
};

export const MY_ITEM_HEADERS: IHeaderData[] = [
  {
    text: '종류',
    value: 'type',
  },
  {
    text: '이름',
    value: 'name',
  },
  {
    text: '상태',
    value: 'status',
  },
];

export type IBodyData = {
  type: string;
  name: string;
  status: string;
  itemId: string;
};

export const MY_ITEM_BODY: IBodyData[] = [
  {
    type: '책',
    name: '모던 리액트 Deep Dive',
    status: '반납 가능',
    itemId: '1',
  },
  {
    type: '책',
    name: '모던 리액트 Deep Dive',
    status: '반납 가능',
    itemId: '2',
  },
  {
    type: '책',
    name: '모던 리액트 Deep Dive',
    status: '기간 초과',
    itemId: '3',
  },
];
