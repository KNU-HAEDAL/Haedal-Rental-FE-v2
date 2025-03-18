import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared';

import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border bg-haedal text-white font-bold hover:bg-haedal/90 cursor-pointer',
        sun: 'border bg-sun text-white font-bold hover:bg-sun/90 cursor-pointer',
        outline:
          'border border-input bg-background font-bold hover:bg-accent cursor-pointer hover:text-accent-foreground shadow-sm',
        moon: 'border bg-moon text-haedal font-bold hover:bg-moon/80 cursor-pointer',
        ghost:
          'hover:bg-accent font-bold hover:text-accent-foreground cursor-pointer',
        link: 'text-haedal font-bold underline-offset-4 hover:underline cursor-pointer',
      },
      size: {
        default: 'h-full px-4 py-1',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
