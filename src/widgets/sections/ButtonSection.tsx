type Props = {
  children: React.ReactNode;
};

export const ButtonSection = ({ children }: Props) => {
  return (
    <div className='flex w-full items-center justify-center gap-3 pb-6'>
      {children}
    </div>
  );
};
