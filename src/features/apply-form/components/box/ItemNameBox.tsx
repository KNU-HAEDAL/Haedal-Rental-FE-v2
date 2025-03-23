import { useState } from 'react';

import { Input } from '@/shared';
import { DescriptionSection } from '@/widgets';

export const ItemNameBox = () => {
  const [itemName, setItemName] = useState('');

  return (
    <div className='flex w-full flex-col px-5'>
      <DescriptionSection>대여 물품의 이름을 작성해주세요.</DescriptionSection>
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
