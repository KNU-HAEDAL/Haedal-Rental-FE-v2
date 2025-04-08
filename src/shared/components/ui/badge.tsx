import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center justify-center border px-4 py-1 text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        available:
          'border border-haedal text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        unavailable: 'bg-moon text-foreground [a&]:hover:bg-moon/90',
        overdue:
          'bg-sun text-white [a&]:hover:bg-sun/90 focus-visible:ring-sun/20 dark:focus-visible:ring-sun/40 dark:bg-sun/70',
      },
    },
    defaultVariants: {
      variant: 'available',
    },
  },
);

function Badge({
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot='badge' className={badgeVariants({ variant })} {...props} />
  );
}

export { Badge, badgeVariants };
