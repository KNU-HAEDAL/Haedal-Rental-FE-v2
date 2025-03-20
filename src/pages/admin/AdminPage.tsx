import { useNavigate } from 'react-router-dom';

import { TableContainer } from '@/features';

import { Button, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { LogoContainer } from '@/widgets';

export const AdminPage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <LogoContainer title={NAVIGATE_BUTTONS_DATA[3].title}>
        <TableContainer />
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <Button onClick={onClick} variant='outline'>
          뒤로
        </Button>
      </div>
    </div>
  );
};
