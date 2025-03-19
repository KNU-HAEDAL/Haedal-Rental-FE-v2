import { useLocation } from 'react-router-dom';

import { AuthButtons, cn, RouterPath, SimpleLogo, SymbolLogo } from '@/shared';

type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === RouterPath.SIGNUP ||
    location.pathname === RouterPath.LOGIN;

  return (
    <main
      className={cn(
        'flex h-screen w-screen flex-col items-center justify-start text-center',
        isAuthPage && 'bg-haedal text-white',
      )}
    >
      {isAuthPage ? (
        <>
          <SimpleLogo />
          {children}
        </>
      ) : (
        <>
          <SymbolLogo />
          <AuthButtons />
          {children}
        </>
      )}
    </main>
  );
};
