import { useLocation, useNavigate } from 'react-router-dom';

import { RouterPath } from '@/shared';

import { Button } from '../../shared/components/ui';

export const AuthLinkContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignupPage = location.pathname === RouterPath.SIGNUP;

  const goToPage = () => {
    if (isSignupPage) navigate(RouterPath.LOGIN);
    else navigate(RouterPath.SIGNUP);
  };

  return (
    <div className='flex flex-row items-center gap-3 pb-6'>
      {isSignupPage && (
        <span className='text-xs font-medium'>계정이 이미 있으신가요?</span>
      )}
      <Button
        variant='link'
        className='hover:text-accent-white text-white'
        onClick={goToPage}
      >
        {isSignupPage ? '로그인' : '회원가입'}
      </Button>
    </div>
  );
};
