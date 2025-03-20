import { Calendar } from 'lucide-react';

import { ItemBox } from '../../components';
import { getAfterDays } from '@/shared';

type Props = {
  startDate: string;
  endDate: string;
};

export const ItemPeriodSection = ({ startDate, endDate }: Props) => {
  const returnDate = getAfterDays(7);

  return (
    <ItemBox className='gap-1 border py-5'>
      <span className='flex w-full'>
        물품 대여 기간을 작성해주세요. 최대 대여기간은&nbsp;
        <p className='font-bold'>일주일</p>
        입니다.
      </span>
      <p>오늘 물품 대여자의 반납 기한은 {returnDate} 입니다.</p>
      <div className='flex w-full items-center gap-5 py-3'>
        <Calendar size='24' />
        <p>
          {startDate} ~ {endDate}
        </p>
      </div>
    </ItemBox>
  );
};
