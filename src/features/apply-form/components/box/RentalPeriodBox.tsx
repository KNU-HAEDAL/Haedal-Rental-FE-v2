import { CalendarDays } from 'lucide-react';

import {
  Calendar,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  getAfterDays,
} from '@/shared';

import { useRentalPeriod } from '../../model';

export const RentalPeriodBox = () => {
  const { date, setDate, rentalPeriod } = useRentalPeriod();

  const currentDate = getAfterDays(7);

  return (
    <div className='flex flex-col gap-1'>
      <p className='text-gray-800'>
        물품 대여 기간을 작성해주세요. 최대 대여 기간은&nbsp;
        <b>일주일</b>입니다.
      </p>
      <p className='text-gray-800'>
        오늘 물품 대여자의 반납 가능 날짜는 <b>{currentDate}</b>입니다.
      </p>
      <div className='mt-2 flex items-center space-x-2'>
        <Popover>
          <PopoverTrigger asChild>
            <div className='flex items-center gap-3'>
              <CalendarDays size={30} />
              <Input
                value={rentalPeriod}
                readOnly
                placeholder='날짜 선택'
                className='w-3xs border-none shadow-none focus:outline-none focus-visible:ring-0'
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-2'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              fromDate={new Date()}
              toDate={new Date(new Date().setDate(new Date().getDate() + 7))}
              modifiers={{
                disabled: [
                  { before: new Date() },
                  {
                    after: new Date(
                      new Date().setDate(new Date().getDate() + 7),
                    ),
                  },
                ],
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
