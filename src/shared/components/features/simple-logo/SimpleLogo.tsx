import { Link } from 'react-router-dom';

import { RouterPath } from '@/shared';

export const SimpleLogo = () => {
  return (
    <Link to={RouterPath.MAIN} className='absolute top-6'>
      <img
        src='/src/shared/_assets/logo/simple-logo.svg'
        alt='haedal'
        className='cursor-pointer'
        width={230}
        height={0}
      />
    </Link>
  );
};
