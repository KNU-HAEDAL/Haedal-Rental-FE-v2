type Props = {
  children: React.ReactNode;
};

export const ButtonContainer = ({ children }: Props) => {
  return (
    <div className='last-container flex w-full items-center justify-center gap-3'>
      {children}
    </div>
  );
};
