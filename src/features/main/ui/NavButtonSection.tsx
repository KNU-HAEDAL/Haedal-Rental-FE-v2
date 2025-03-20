import { Link } from 'react-router-dom';

import { NAVIGATE_BUTTONS_DATA } from '@/shared';

export const NavButtonSection = () => {
  return (
    <section className='grid h-auto w-[380px] grid-cols-2 place-content-center place-items-center gap-5 pb-3'>
      {NAVIGATE_BUTTONS_DATA.map((data) => (
        <Link key={data.key} to={data.navigateTo}>
          <div className='flex h-[125px] w-[175px] cursor-pointer flex-col items-center rounded-md border border-gray-200 py-2 shadow-md transition-all ease-in-out hover:-translate-y-1 hover:shadow-[5px_5px_20px_0px_rgba(0,0,0,0.10)]'>
            <div className='flex flex-grow items-center'>
              <img src={data.icon} alt={data.title} width={60} height={50} />
            </div>
            <p className='font-bold'>{data.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};
