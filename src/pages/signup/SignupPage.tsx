import { SignupForm } from '@/features';
import { AuthContainer, AuthLinkContainer, PageWrapper } from '@/widgets';

export const SignupPage = () => {
  return (
    <PageWrapper>
      <div className='mt-6 flex w-full flex-1 flex-col items-center justify-start gap-3 px-6'>
        <AuthContainer title='회원가입'>
          <SignupForm />
        </AuthContainer>
        <AuthLinkContainer />
      </div>
    </PageWrapper>
  );
};
