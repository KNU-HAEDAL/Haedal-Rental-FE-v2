import { cn } from '@/shared/libs';

type ButtonContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const ButtonContainer = ({
  className,
  children,
}: ButtonContainerProps) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-3 pt-2 pb-6',
        className,
      )}
    >
      {children}
    </div>
  );
};
