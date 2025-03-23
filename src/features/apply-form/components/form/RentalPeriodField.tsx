import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useFormContext } from 'react-hook-form';

import { getDateDistance, kstFormat } from '@toss/date';

import {
  Calendar,
  FormControl,
  FormField,
  FormItem,
  Popover,
  PopoverContent,
  getAfterDays,
} from '@/shared';

import { ApplyForm } from '../../model';
import { DatePopoverTriggerButton } from '../button';

export const RentalPeriodField = () => {
  const form = useFormContext<ApplyForm>();

  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const currentDate = getAfterDays(7);

  const onSelectCalendar = (from?: Date, to?: Date) => {
    if (from) {
      form.setValue('rentalStartDate', kstFormat(from, 'yyyy-LL-dd'));
    }
    if (from && to) {
      form.setValue(
        'rentalEndDate',
        getDateDistance(from, to).days === 0 ? '' : kstFormat(to, 'yyyy-LL-dd'),
      );
    } else {
      form.setValue('rentalEndDate', '');
    }
  };

  const getMaxEndDate = (startDate?: Date) => {
    return startDate
      ? new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000)
      : undefined;
  };

  return (
    <FormField
      control={form.control}
      name='rentalStartDate'
      render={({ field }) => (
        <FormItem className='flex w-full flex-col gap-2 border p-5 text-start'>
          <div className='text-md flex flex-col gap-1'>
            <p>
              물품 대여 기간을 작성해주세요. 최대 대여 기간은&nbsp;
              <b>일주일</b>입니다.
            </p>
            <p>
              오늘 물품 대여자의 반납 가능 날짜는 <b>{currentDate}</b>입니다.
            </p>
          </div>
          <FormControl>
            <div className='mt-2 flex items-center space-x-2'>
              <Popover>
                <DatePopoverTriggerButton
                  startDate={field.value ? new Date(field.value) : undefined}
                  endDate={
                    form.getValues('rentalEndDate')
                      ? new Date(form.getValues('rentalEndDate'))
                      : undefined
                  }
                />
                <PopoverContent className='w-auto p-2'>
                  <Calendar
                    mode='range'
                    selected={date}
                    fromDate={new Date()}
                    toDate={getMaxEndDate(date?.from)}
                    onSelect={(range) => {
                      setDate(range);
                      onSelectCalendar(range?.from, range?.to);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
