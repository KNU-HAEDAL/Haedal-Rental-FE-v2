import { Link } from 'react-router-dom';

import { SignupContainer } from '@/features';

export const SignupPage = () => {
  return (
    <main className='flex h-dvh w-full flex-col items-center justify-center gap-3 bg-[#0F1729] text-center text-white'>
      {/* <SimpleLogo /> */}
      <SignupContainer />
      <div className='flex flex-row items-center gap-3'>
        <span className='text-xs font-medium'>계정이 이미 있으신가요?</span>
        <Link to='/login'>
          <span className='text-sm font-semibold'>로그인</span>
        </Link>
      </div>
    </main>
  );
};
