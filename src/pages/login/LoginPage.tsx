import { LoginForm } from '@/features';

import { SimpleLogo } from '@/shared';

import { AuthContainer, AuthLinkContainer } from '@/widgets';

export const LoginPage = () => {
  return (
    <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <SimpleLogo />
      <AuthContainer title='회원가입'>
        <LoginForm />
      </AuthContainer>
      <AuthLinkContainer />
    </main>
  );
};
