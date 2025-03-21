import { Button } from '@/shared';

import { useRentalForm } from '../model';

export const CategorySelector = () => {
  const { categories, selectedCategory, setSelectedCategory } = useRentalForm();

  return (
    <div>
      <p className='mb-2 text-gray-800'>대여 물품의 종류를 선택해주세요.</p>
      <div className='flex space-x-2'>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? 'moonTag' : 'outline'}
            className='h-[30px]'
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
