import { useNavigate } from 'react-router-dom';

import { SignupForm } from '@/features';

import { RouterPath, SimpleLogo } from '@/shared';

import { AuthContainer, AuthLinkContainer } from '@/widgets';

export const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <SimpleLogo />
      <AuthContainer title='회원가입'>
        <SignupForm />
      </AuthContainer>
      <AuthLinkContainer
        label='로그인'
        onClick={() => navigate(RouterPath.LOGIN)}
      />
    </main>
  );
};
