import { LoginForm } from '@/features';

import { AuthContainer, AuthLinkContainer, PageWrapper } from '@/widgets';

export const LoginPage = () => {
  return (
    <PageWrapper>
      <AuthContainer title='로그인'>
        <LoginForm />
      </AuthContainer>
      <AuthLinkContainer />
    </PageWrapper>
  );
};
