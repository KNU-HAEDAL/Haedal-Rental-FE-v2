type Props = {
  children: React.ReactNode;
};

export const ButtonContainer = ({ children }: Props) => {
  return (
    <div className='w-layout flex items-center justify-center gap-3 pb-6'>
      {children}
    </div>
  );
};
