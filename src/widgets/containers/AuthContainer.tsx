type Props = {
  title: string;
  children: React.ReactNode;
};

export const AuthContainer = ({ title, children }: Props) => {
  return (
    <div className='flex w-full flex-col gap-8 rounded-xl bg-white py-5 text-black sm:w-96 sm:py-6'>
      <h1 className='px-8 text-xl font-semibold'>{title}</h1>
      {children}
    </div>
  );
};
