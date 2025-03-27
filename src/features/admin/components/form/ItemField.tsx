import { ControllerRenderProps, useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormMessage } from '@/shared';

type Props = {
  name: string;
  label?: string;
  children: (field: ControllerRenderProps) => React.ReactNode;
};

export const ItemField = ({ name, label, children }: Props) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className='flex flex-col gap-3'>
            <p>{label}</p>
            <FormControl>{children(field)}</FormControl>
          </div>
          <div className='flex justify-start'>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};
