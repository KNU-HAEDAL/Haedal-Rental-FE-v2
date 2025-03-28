import { Link } from 'react-router-dom';

import Logo from '@/shared/_assets/logo/simple-logo.svg';

import { RouterPath } from '@/shared';

export const SimpleLogo = () => {
  return (
    <Link to={RouterPath.MAIN} className='mt-6'>
      <img
        src={Logo}
        alt='haedal'
        className='cursor-pointer'
        width={230}
        height={0}
      />
    </Link>
  );
};
