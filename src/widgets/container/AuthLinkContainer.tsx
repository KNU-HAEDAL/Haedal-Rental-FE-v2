import { useLocation } from 'react-router-dom';

import { RouterPath } from '@/shared';

import { Button } from '../../shared/components/ui';

type AuthLinkContainerProps = {
  label: string;
  onClick: () => void;
};

export const AuthLinkContainer = ({
  label,
  onClick,
}: AuthLinkContainerProps) => {
  const location = useLocation();
  const isSignupPage = location.pathname === RouterPath.SIGNUP;

  return (
    <div className='flex flex-row items-center gap-3'>
      {isSignupPage && (
        <span className='text-xs font-medium'>계정이 이미 있으신가요?</span>
      )}
      <Button
        variant='link'
        className='hover:text-accent-white text-white'
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};
