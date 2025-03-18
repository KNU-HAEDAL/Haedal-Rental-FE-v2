import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared';

import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'cursor-pointer font-bold inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        // 액션
        primary:
          'border border-haedal bg-haedal text-white hover:bg-haedal/90 disabled:cursor-not-allowed disabled:opacity-30',
        secondary:
          'border border-haedal text-haedal hover:bg-accent hover:text-accent-foreground',
        // 상태
        danger:
          'border border-destructive bg-background text-destructive hover:bg-accent disabled:border-gray-300 disabled:text-gray-400',
        // 태그
        moonTag: 'border bg-moon text-foreground hover:bg-moon/80',
        sunTag: 'border bg-sun text-white hover:bg-sun/90',
        // 스타일만 제공
        outline:
          'border bg-background text-gray-500 hover:bg-accent hover:text-accent-foreground',
        link: 'text-haedal underline underline-offset-4 hover:text-accent-foreground',
      },
      size: {
        default: 'h-full px-4 py-1 rounded-xs',
        sm: 'h-9 px-3 rounded-xs text-md',
        lg: 'h-11 px-8 rounded-md text-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
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
