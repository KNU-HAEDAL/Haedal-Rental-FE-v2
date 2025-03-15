import { Link } from 'react-router-dom';

import { LoginContainer } from '@/features';

import { RouterPath, SimpleLogo } from '@/shared';

export const LoginPage = () => {
  return (
    <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <SimpleLogo />
      <LoginContainer />
      <Link to={RouterPath.SIGNUP}>
        <p className='text-sm font-semibold'>회원가입</p>
      </Link>
    </main>
  );
};
