import { Link } from 'react-router-dom';

import { LoginContainer } from '@/features';

import { SimpleLogo } from '@/shared';

export const LoginPage = () => {
  return (
    <main className='flex h-dvh w-full flex-col items-center justify-center gap-3 bg-[#0F1729] text-center text-white'>
      <SimpleLogo />
      <LoginContainer />
      <Link to='/signup'>
        <p className='text-sm font-semibold'>회원가입</p>
      </Link>
    </main>
  );
};
