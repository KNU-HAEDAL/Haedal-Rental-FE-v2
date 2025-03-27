import { kstFormat } from '@toss/date';
import { CalendarDays } from 'lucide-react';

import { Button, FormControl, PopoverTrigger } from '@/shared';

type Props = {
  startDate?: Date;
  endDate?: Date;
};

export const DatePopoverTriggerButton = ({ startDate, endDate }: Props) => {
  return (
    <PopoverTrigger asChild>
      <FormControl>
        <div className='flex cursor-pointer items-center'>
          <CalendarDays size={30} />
          <Button variant='link' className='flex w-full justify-start'>
            {startDate ? (
              endDate ? (
                <>
                  {kstFormat(startDate, 'yyyy.LL.dd')} ~{' '}
                  {kstFormat(endDate, 'yyyy.LL.dd')}
                </>
              ) : (
                kstFormat(startDate, 'yyyy.LL.dd')
              )
            ) : (
              <span className='text-gray-400'>대여할 날짜를 선택해주세요.</span>
            )}
          </Button>
        </div>
      </FormControl>
    </PopoverTrigger>
  );
};
