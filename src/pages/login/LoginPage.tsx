import { LoginForm } from '@/features';
import { AuthContainer, AuthLinkContainer, PageWrapper } from '@/widgets';

export const LoginPage = () => {
  return (
    <PageWrapper>
      <div className='flex flex-1 flex-col items-center justify-center gap-3'>
        <AuthContainer title='로그인'>
          <LoginForm />
        </AuthContainer>
        <AuthLinkContainer />
      </div>
    </PageWrapper>
  );
};
