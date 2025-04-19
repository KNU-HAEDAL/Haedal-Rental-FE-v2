import { Calendar } from 'lucide-react';

import { getAfterDays } from '@/shared';

import { ItemBox } from '../../components';

type Props = {
  startDate: string;
  endDate: string;
};

export const ItemPeriodSection = ({ startDate, endDate }: Props) => {
  const returnDate = getAfterDays(7);

  return (
    <ItemBox className='inner-y gap-1 border'>
      <span className='flex w-full'>
        물품 대여 기간을 선택해주세요. 최대 대여 기간은&nbsp;
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
