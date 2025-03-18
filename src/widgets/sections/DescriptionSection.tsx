import { cn } from '@/shared';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const DescriptionSection = ({
  className,
  children,
  ...props
}: React.ComponentProps<'p'> & Props) => {
  return (
    <p className={cn(className)} {...props}>
      {children}
    </p>
  );
};
