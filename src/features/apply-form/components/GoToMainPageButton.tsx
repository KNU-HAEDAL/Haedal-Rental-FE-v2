import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';

import { useStepStore } from '../model';

export const GoToMainPageButton = () => {
  const { resetStep } = useStepStore();

  const navigate = useNavigate();

  const onClick = () => {
    navigate(RouterPath.MAIN);
    resetStep();
  };

  return (
    <div className='mt-6'>
      <Button
        variant='secondary'
        onClick={onClick}
        className='h-[35px] w-[150px] font-bold'
      >
        첫 페이지로 이동
      </Button>
    </div>
  );
};
