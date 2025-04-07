type Props = {
  title: string;
  children: React.ReactNode;
};

export const AuthContainer = ({ title, children }: Props) => {
  return (
    <div className='flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black'>
      <h1 className='px-8 text-xl font-semibold'>{title}</h1>
      {children}
    </div>
  );
};
