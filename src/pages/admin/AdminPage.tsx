import { useNavigate } from 'react-router-dom';

import { TableContainer } from '@/features';

import { Button } from '@/shared';

import { LogoContainer } from '@/widgets';

export const AdminPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className='flex flex-col items-center justify-center h-full gap-3 text-center'>
      <LogoContainer title='관리자 페이지'>
        <TableContainer />
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <Button onClick={onClick} variant='outline' className='px-6 shadow-md'>
          뒤로
        </Button>
      </div>
    </div>
  );
};
