import { Link } from 'react-router-dom';

import { RouterPath } from '@/shared';
import Logo from '@/shared/_assets/logo/symbol-logo.png';

export const SymbolLogo = () => {
  return (
    <Link to={RouterPath.MAIN}>
      <img src={Logo} alt='logo' className='h-auto w-[230px] cursor-pointer' />
    </Link>
  );
};
