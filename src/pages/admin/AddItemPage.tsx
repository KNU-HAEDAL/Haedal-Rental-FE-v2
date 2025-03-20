import { useNavigate } from 'react-router-dom';

import { AddItemForm } from '@/features';

import { Button } from '@/shared';

import { LogoContainer } from '@/widgets';

export const AddItemPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <LogoContainer title='물품 추가'>
        <p className='font-bold'>대여 가능한 물품을 추가해주세요.</p>
        <AddItemForm />
      </LogoContainer>
      <div className='flex items-center justify-center gap-3 py-5'>
        <Button onClick={() => navigate(-1)} variant='outline'>
          뒤로
        </Button>
      </div>
    </>
  );
};
