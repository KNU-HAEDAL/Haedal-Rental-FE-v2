import { MainContainer } from '@/features';

import { AuthButtons, SymbolLogo } from '@/shared';

export const MainPage = () => {
  return (
    <div className='flex h-dvh flex-col items-center justify-center gap-3 text-center'>
      <SymbolLogo />
      <AuthButtons />
      <MainContainer />
    </div>
  );
};
