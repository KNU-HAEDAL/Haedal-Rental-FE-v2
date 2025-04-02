import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';

export const ItemsButtonBox = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center gap-3'>
      <b>대여 가능 물품 확인 :</b>
      <Button
        variant='secondary'
        className='h-full px-4 font-bold'
        onClick={() => navigate(RouterPath.ITEMS)}
      >
        해달 물품 목록 페이지
      </Button>
    </div>
  );
};
