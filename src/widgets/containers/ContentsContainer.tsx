type Props = {
  children: React.ReactNode;
  title: string;
};

export const ContentsContainer = ({ children, title }: Props) => {
  return (
    <div className='mb-3 flex w-full flex-col items-center border border-gray-200'>
      <div className='bg-haedal flex w-full justify-center py-3 text-xl font-bold text-white'>
        {title}
      </div>
      <div className='inner-y inner-gap-y flex w-full flex-col items-center'>
        {children}
      </div>
    </div>
  );
};
