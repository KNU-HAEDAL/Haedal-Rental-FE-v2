import CalendarIcon from '@/features/_assets/apply-form/calendar-icon.png';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
} from '@/shared';

import { useRentalPeriod } from '../model';

export const RentalPeriodSelector = () => {
  const { date, setDate, rentalPeriod } = useRentalPeriod();

  return (
    <div>
      <p className='mb-2 text-gray-800'>
        물품 대여 기간을 작성해주세요. 최대 대여 기간은{' '}
        <span className='font-bold'>일주일</span>입니다.
      </p>
      <div className='mt-2 flex items-center space-x-2'>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='secondary' className='h-10 px-3'>
              <img src={CalendarIcon} alt='캘린더 아이콘' className='h-7 w-7' />
            </Button>
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
        <input
          type='text'
          value={rentalPeriod}
          readOnly
          placeholder='날짜 선택'
          className='w-full p-2 focus:outline-none'
        />
      </div>
    </div>
  );
};
