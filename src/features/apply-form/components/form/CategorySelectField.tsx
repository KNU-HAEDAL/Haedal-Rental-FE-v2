import { useFormContext } from 'react-hook-form';

import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  ITEM_TYPE,
} from '@/shared';

import { ApplyForm } from '../../model';

export const CategorySelectField = () => {
  const form = useFormContext<ApplyForm>();

  return (
    <FormField
      control={form.control}
      name='category'
      render={({ field }) => (
        <FormItem className='flex w-full flex-col gap-3 border p-5 text-start'>
          <FormDescription className='text-md'>
            대여 물품의 종류를 선택해주세요.
          </FormDescription>
          <FormControl>
            <div className='flex gap-2'>
              {ITEM_TYPE.map((category) => (
                <Button
                  {...field}
                  key={category.value}
                  onClick={() => field.onChange(category.value)}
                  variant={
                    field.value === category.value ? 'moonTag' : 'outline'
                  }
                >
                  {category.type}
                </Button>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
