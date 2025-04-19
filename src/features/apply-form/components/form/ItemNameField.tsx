import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/shared';

import { ApplyForm } from '../../model';

export const ItemNameField = () => {
  const form = useFormContext<ApplyForm>();

  return (
    <FormField
      control={form.control}
      name='itemName'
      render={({ field }) => (
        <FormItem className='inner-x flex w-full flex-col'>
          <FormDescription className='text-md text-left'>
            대여 물품의 이름을 작성해주세요.
          </FormDescription>
          <FormControl>
            <Input
              variant='underline'
              {...field}
              value={field.value}
              className='w-[300px]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
