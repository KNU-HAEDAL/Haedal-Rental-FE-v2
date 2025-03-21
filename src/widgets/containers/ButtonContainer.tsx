import { cn } from '@/shared/libs';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const ButtonContainer = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center gap-3 pb-6',
        className,
      )}
    >
      {children}
    </div>
  );
};
