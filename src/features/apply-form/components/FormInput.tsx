import { Input } from '@/shared';

import { useRentalForm } from '../model';

export const FormInput = () => {
  const { itemName, setItemName } = useRentalForm();

  return (
    <div className='flex flex-col gap-1 px-3 text-start'>
      <p className='text-gray-800'>대여 물품의 이름을 작성해주세요.</p>
      <Input
        variant='underline'
        type='text'
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className='w-[300px]'
      />
    </div>
  );
};
