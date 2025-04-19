type Props = {
  children: React.ReactNode;
};

export const DescriptionSection = ({
  children,
}: React.ComponentProps<'div'> & Props) => {
  return (
    <div className='inner-x flex w-full flex-col items-start justify-start text-left text-sm sm:text-base'>
      {children}
    </div>
  );
};
