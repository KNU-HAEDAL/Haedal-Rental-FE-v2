export type ItemCategory = 'BOOK' | 'BOARD_GAME' | 'OFFICE_SUPPLY' | 'ETC';

export type ItemStatus =
  | 'RENTAL_AVAILABLE'
  | 'RENTING'
  | 'RENTAL_OVERDUE'
  | 'RENTAL_WAITING'
  | 'OVERDUE'
  | '';
