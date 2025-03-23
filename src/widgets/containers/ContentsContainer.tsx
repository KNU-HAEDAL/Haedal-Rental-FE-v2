import { cn } from '@/shared';

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const ContentsContainer = ({ children, title, className }: Props) => {
  return (
    <div
      className={cn(
        'mb-3 flex w-[550px] flex-col items-center gap-5 border border-gray-200 pb-5',
        className,
      )}
    >
      <div className='bg-haedal flex w-full justify-center py-3'>
        <p className='text-xl font-bold text-white'>{title}</p>
      </div>
      {children}
    </div>
  );
};
