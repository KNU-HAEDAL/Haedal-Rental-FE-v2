import { cn } from '@/shared';

export const ItemWrapper = ({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) => {
  return (
    <section
      className={cn('flex w-full flex-col px-5 text-start', className)}
      {...props}
    >
      {children}
    </section>
  );
};
