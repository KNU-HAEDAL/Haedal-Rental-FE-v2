import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@/features';

import { RouterPath, SimpleLogo } from '@/shared';

import { AuthContainer, AuthLinkContainer } from '@/widgets';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <SimpleLogo />
      <AuthContainer title='회원가입'>
        <LoginForm />
      </AuthContainer>
      <AuthLinkContainer
        label='회원가입'
        onClick={() => navigate(RouterPath.SIGNUP)}
      />
    </main>
  );
};
