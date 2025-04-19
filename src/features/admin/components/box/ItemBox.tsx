import { cn } from '@/shared';

export const ItemBox = ({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) => {
  return (
    <section
      className={cn(
        'inner-x mb-3 flex w-[550px] flex-col text-start',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
