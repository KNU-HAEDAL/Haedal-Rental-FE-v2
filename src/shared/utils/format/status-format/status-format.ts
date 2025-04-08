import { ItemStatus } from '@/shared';

export const statusFormat = (status: string) => {
  const statusMap: Record<string, string> = {
    RENTAL_AVAILABLE: '대여 가능',
    RENTING: '대여 중',
    OVERDUE: '연체 중',
    RENTAL_WAITING: '반납 대기',
  };

  return statusMap[status];
};

export const statusVariantMap: Record<
  ItemStatus,
  'available' | 'unavailable' | 'overdue'
> = {
  RENTAL_AVAILABLE: 'available',
  RENTING: 'unavailable',
  RENTAL_OVERDUE: 'overdue',
  OVERDUE: 'overdue',
  RENTAL_WAITING: 'unavailable',
  '': 'available',
};
