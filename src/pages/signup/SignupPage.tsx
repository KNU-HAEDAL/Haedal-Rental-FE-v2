import { SignupForm } from '@/features';

import { SimpleLogo } from '@/shared';

import { AuthContainer, AuthLinkContainer } from '@/widgets';

export const SignupPage = () => {
  return (
    <main className='bg-haedal flex h-dvh w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <SimpleLogo />
      <AuthContainer title='회원가입'>
        <SignupForm />
      </AuthContainer>
      <AuthLinkContainer />
    </main>
  );
};
