import { SignupForm } from '@/features';

import { AuthContainer, AuthLinkContainer, PageWrapper } from '@/widgets';

export const SignupPage = () => {
  return (
    <PageWrapper>
      <AuthContainer title='회원가입'>
        <SignupForm />
      </AuthContainer>
      <AuthLinkContainer />
    </PageWrapper>
  );
};
