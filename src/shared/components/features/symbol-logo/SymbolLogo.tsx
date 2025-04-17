import { Link } from 'react-router-dom';

import Logo from '@/shared/_assets/logo/symbol-logo.png';

import { RouterPath } from '@/shared';

export const SymbolLogo = () => {
  return (
    <Link to={RouterPath.MAIN} className='mt-2'>
      <img
        src={Logo}
        alt='logo'
        className='h-auto w-[159px] cursor-pointer sm:w-[230px]'
      />
    </Link>
  );
};
