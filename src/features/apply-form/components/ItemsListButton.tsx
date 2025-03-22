import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';

export const ItemListButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(RouterPath.ITEMS);
  };

  return (
    <div className='mt-6'>
      <div className='flex items-center justify-start gap-2'>
        <span className='font-bold text-gray-800'>대여 가능 물품 확인 :</span>
        <Button
          variant='secondary'
          className='h-[35px] w-[150px] px-6 font-bold'
          onClick={handleButtonClick}
        >
          대여 물품 목록 페이지
        </Button>
      </div>
    </div>
  );
};
