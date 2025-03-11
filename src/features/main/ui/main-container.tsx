import { Link } from 'react-router-dom';

import { NAVIGATE_BUTTONS_DATA } from '../model';

export const MainContainer = () => {
  return (
    <section className='flex h-[450px] w-[550px] flex-col items-center gap-5 border border-gray-200'>
      <div className='bg-haedal w-full py-3'>
        <p className='text-xl font-bold text-white'>물품 대여 장부 서비스</p>
      </div>
      <div className='mx-5 text-start'>
        <p>해달 동아리방 물품 대여 서비스 입니다.</p>
        <p>
          해달 물품은 해달 동아리원이라면 대여 장부 작성 후 누구나 대여
          가능합니다.
        </p>
      </div>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='grid h-auto w-[375px] grid-cols-2 place-content-center place-items-center gap-4'>
          {NAVIGATE_BUTTONS_DATA.map((data) => (
            <Link key={data.key} to={data.navigateTo}>
              <div className='flex h-[125px] w-[175px] cursor-pointer flex-col items-center rounded-md border border-gray-200 py-2 shadow-md transition-all ease-in-out hover:-translate-y-1 hover:shadow-[5px_5px_20px_0px_rgba(0,0,0,0.10)]'>
                <div className='flex flex-grow items-center'>
                  <img
                    src={data.icon}
                    alt={data.title}
                    width={60}
                    height={50}
                  />
                </div>
                <p className='font-bold'>{data.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
