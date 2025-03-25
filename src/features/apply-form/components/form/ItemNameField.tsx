import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/shared';

type Props = {
  name: string;
};

export const ItemNameField = ({ name }: Props) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex w-full flex-col px-3'>
          <FormDescription className='text-md'>
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
