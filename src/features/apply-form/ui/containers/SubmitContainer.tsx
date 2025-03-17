import { SubmitMessage, GoToMainPageButton } from '../sections';

export const SubmitContainer = () => {
  return (
    <div className='flex w-[550px] flex-col items-center justify-center bg-white'>
      <section className='w-[550px] overflow-hidden rounded-lg border border-gray-300'>
        <header className='bg-haedal mb-3 p-3 text-center text-xl font-bold text-white'>
          물품 대여 장부
        </header>
        <SubmitMessage />
      </section>
      <GoToMainPageButton />
    </div>
  );
};
