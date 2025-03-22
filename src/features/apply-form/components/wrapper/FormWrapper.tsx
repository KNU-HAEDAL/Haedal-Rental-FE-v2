type Props = {
  children: React.ReactNode;
};

export const FormWrapper = ({ children }: Props) => {
  return (
    <div className='overflow-hidden border border-gray-200'>{children}</div>
  );
};
