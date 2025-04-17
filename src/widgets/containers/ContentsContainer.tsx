type Props = {
  children: React.ReactNode;
  title: string;
};

export const ContentsContainer = ({ children, title }: Props) => {
  return (
    <div className='mb-3 flex w-[375px] flex-col items-center gap-5 border border-gray-200 pb-5 sm:w-[550px]'>
      <div className='bg-haedal flex w-full justify-center py-3 text-xl font-bold text-white'>
        {title}
      </div>
      {children}
    </div>
  );
};
