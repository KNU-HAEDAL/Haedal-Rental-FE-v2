import { useNavigate } from 'react-router-dom';

import { NAVIGATE_BUTTONS_DATA } from '@/shared';

export const NavButtonSection = () => {
  const navigate = useNavigate();

  return (
    <section className='grid w-full grid-cols-2 place-content-center place-items-center gap-3 px-3'>
      {NAVIGATE_BUTTONS_DATA.map((data) => (
        <button
          key={data.key}
          type='button'
          onClick={() => navigate(data.navigateTo)}
          className='flex w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-gray-200 py-3 shadow-md transition-all ease-in-out hover:-translate-y-1 hover:shadow-[5px_5px_20px_0px_rgba(0,0,0,0.10)]'
        >
          <div className='flex flex-grow items-center'>
            <img src={data.icon} alt={data.title} width={60} height={50} />
          </div>
          <p className='text-sm font-bold sm:text-base'>{data.title}</p>
        </button>
      ))}
    </section>
  );
};
