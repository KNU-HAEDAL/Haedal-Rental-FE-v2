import { Link } from 'react-router-dom';

export const SimpleLogo = () => {
  return (
    <Link to='/' className='absolute top-6'>
      <img
        src='/logo/simple-logo.svg'
        alt='haedal'
        className='cursor-pointer'
        width={230}
        height={0}
      />
    </Link>
  );
};
