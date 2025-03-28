export type HeaderData = {
  text: string;
  value: string;
};

export const MY_RENTAL_HEADERS: HeaderData[] = [
  {
    text: '종류',
    value: 'type',
  },
  {
    text: '이름',
    value: 'name',
  },
  { text: '반납 기한', value: 'dueDate' },
  {
    text: '상태',
    value: 'status',
  },
];

export type BodyData = {
  itemId: string;
  type: string;
  name: string;
  dueDate: string;
};

export const MY_RENTAL_BODIES: BodyData[] = [
  {
    itemId: '1',
    type: '책',
    name: '모던 리액트 Deep Dive',
    dueDate: '2025-03-30',
  },
  {
    itemId: '2',
    type: '책',
    name: '모던 리액트 Deep Dive',
    dueDate: '2025-03-10',
  },
  {
    itemId: '3',
    type: '책',
    name: '모던 리액트 Deep Dive',
    dueDate: '2025-03-30',
  },
];
