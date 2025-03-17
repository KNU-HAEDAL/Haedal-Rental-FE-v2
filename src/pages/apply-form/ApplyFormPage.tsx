import { ApplyFormContainer } from '@/features';

import { SymbolLogo } from '@/shared';

export const ApplyFormPage = () => {
  return (
    <div className='relative flex flex-col items-center gap-3'>
      <SymbolLogo />
      <ApplyFormContainer />
    </div>
  );
};
