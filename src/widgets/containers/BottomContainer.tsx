type Props = {
  children: React.ReactNode;
};

export const BottomContainer = ({ children }: Props) => {
  return <div className='w-layout flex flex-col items-center'>{children}</div>;
};
