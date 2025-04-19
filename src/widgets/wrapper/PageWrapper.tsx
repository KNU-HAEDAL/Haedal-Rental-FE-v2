import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { RouterPath, SimpleLogo, SymbolLogo } from '@/shared';

import { AuthButtonContainer } from '../containers';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: Props) => {
  const location = useLocation();
  const path = location.pathname;

  const isAuthPage = path === RouterPath.SIGNUP || path === RouterPath.LOGIN;

  useEffect(() => {
    const body = document.body;

    // body에 클래스 붙여 배경 스타일 적용
    if (path.startsWith('/login') || path.startsWith('/signup')) {
      body.className = 'page-auth';
    } else {
      body.className = 'page-main';
    }
  }, [path]);

  return (
    <main
      className={
        'flex h-screen w-full flex-col items-center justify-start text-center'
      }
    >
      {isAuthPage ? (
        <>
          <SimpleLogo />
          {children}
        </>
      ) : (
        <>
          <SymbolLogo />
          <AuthButtonContainer />
          {children}
        </>
      )}
    </main>
  );
};
