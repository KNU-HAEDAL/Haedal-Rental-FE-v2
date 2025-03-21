import { useNavigate } from 'react-router-dom';

import { Button, RouterPath } from '@/shared';

export const GoToMainPageButton = () => {
  const navigate = useNavigate();

  const handleGoToMainPage = () => {
    navigate(RouterPath.MAIN);
  };

  return (
    <div className='mt-6'>
      <Button
        variant='secondary'
        onClick={handleGoToMainPage}
        className='h-[35px] w-[150px] font-bold'
      >
        첫 페이지로 이동
      </Button>
    </div>
  );
};
