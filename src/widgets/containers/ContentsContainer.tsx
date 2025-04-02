type Props = {
  children: React.ReactNode;
  title: string;
};

export const ContentsContainer = ({ children, title }: Props) => {
  return (
    <div
      className={
        'mb-3 flex w-[550px] flex-col items-center gap-5 border border-gray-200 pb-5'
      }
    >
      <div className='bg-haedal flex w-full justify-center py-3'>
        <p className='text-xl font-bold text-white'>{title}</p>
      </div>
      {children}
    </div>
  );
};
