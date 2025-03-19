import { cn } from '@/shared';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const DescriptionSection = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & Props) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-start justify-start px-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
