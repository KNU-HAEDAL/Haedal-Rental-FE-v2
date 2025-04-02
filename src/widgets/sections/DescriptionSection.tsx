type Props = {
  children: React.ReactNode;
};

export const DescriptionSection = ({
  children,
  ...props
}: React.ComponentProps<'div'> & Props) => {
  return (
    <div
      className={
        'flex w-full flex-col items-start justify-start px-3 text-left'
      }
      {...props}
    >
      {children}
    </div>
  );
};
