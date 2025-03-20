import { cn } from '@/shared';

export const ItemBox = ({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) => {
  return (
    <section
      className={cn('mb-3 flex w-[550px] flex-col px-3 text-start', className)}
      {...props}
    >
      {children}
    </section>
  );
};
