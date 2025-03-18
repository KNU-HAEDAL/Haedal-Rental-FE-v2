export type HeaderData = {
  text: string;
  value: string;
};

export const MY_ITEM_HEADERS: HeaderData[] = [
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

export type BodyData = {
  type: string;
  name: string;
  status: string;
  itemId: string;
};

export const MY_ITEM_BODY: BodyData[] = [
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
