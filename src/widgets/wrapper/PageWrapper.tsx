import { useLocation } from 'react-router-dom';

import { AuthButtons, RouterPath, SimpleLogo, SymbolLogo } from '@/shared';

type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === RouterPath.SIGNUP ||
    location.pathname === RouterPath.LOGIN;

  return (
    <>
      {isAuthPage ? (
        <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
          <SimpleLogo />
          {children}
        </main>
      ) : (
        <main className='flex h-full w-full flex-col items-center justify-center gap-3 text-center'>
          <SymbolLogo />
          <AuthButtons />
          {children}
        </main>
      )}
    </>
  );
};
