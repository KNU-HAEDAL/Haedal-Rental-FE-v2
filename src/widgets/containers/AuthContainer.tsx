import { cn } from '@/shared';

type Props = {
  className?: string;
  title: string;
  children: React.ReactNode;
};

export const AuthContainer = ({ className, title, children }: Props) => {
  return (
    <div
      className={cn(
        'flex w-96 flex-col gap-8 rounded-xl bg-white py-6 text-black',
        className,
      )}
    >
      <h1 className='px-8 text-xl font-semibold'>{title}</h1>
      {children}
    </div>
  );
};
