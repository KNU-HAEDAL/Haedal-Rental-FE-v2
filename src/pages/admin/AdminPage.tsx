import { TableContainer } from '@/features';

import { BackButton } from '@/shared';

import { LogoContainer } from '@/widgets';

export const AdminPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <LogoContainer title='관리자 페이지'>
        <TableContainer />
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <BackButton />
      </div>
    </div>
  );
};
