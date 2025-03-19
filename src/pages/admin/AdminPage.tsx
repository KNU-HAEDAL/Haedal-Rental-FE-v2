import { TableContainer } from '@/features';

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { LogoContainer } from '@/widgets';

export const AdminPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <LogoContainer title={NAVIGATE_BUTTONS_DATA[3].title}>
        <TableContainer />
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <BackButton />
      </div>
    </div>
  );
};
