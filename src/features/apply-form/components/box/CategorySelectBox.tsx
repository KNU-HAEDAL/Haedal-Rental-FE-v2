import { useState } from 'react';

import { Button, ITEM_TYPE } from '@/shared';

export const CategorySelectBox = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <div className='flex flex-col gap-3'>
      <p>대여 물품의 종류를 선택해주세요.</p>
      <div className='flex space-x-2'>
        {ITEM_TYPE.map((category) => (
          <Button
            key={category.value}
            onClick={() => setSelectedCategory(category.type)}
            variant={selectedCategory === category.type ? 'moonTag' : 'outline'}
          >
            {category.type}
          </Button>
        ))}
      </div>
    </div>
  );
};
