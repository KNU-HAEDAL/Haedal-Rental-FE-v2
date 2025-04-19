import { useLocation } from 'react-router-dom';

import { AuthButton, RouterPath, SimpleLogo, SymbolLogo, cn } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === RouterPath.SIGNUP ||
    location.pathname === RouterPath.LOGIN;

  return (
    <main
      className={cn(
        'flex h-screen w-full flex-col items-center justify-start text-center',
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
          <AuthButton />
          {children}
        </>
      )}
    </main>
  );
};
