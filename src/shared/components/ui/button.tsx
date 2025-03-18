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
        primary: 'border bg-haedal text-white hover:bg-haedal/90',
        secondary: 'border bg-background text-haedal hover:bg-background/90',
        // 상태
        danger: 'border bg-danger text-white hover:bg-danger/90', // 삭제, 로그아웃
        // 스타일만 제공
        sun: 'border bg-sun text-white hover:bg-sun/90', // Badge
        moon: 'border bg-moon text-haedal hover:bg-moon/80', // Badge
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost:
          'border-haedal-500 hover:bg-accent hover:text-accent-foreground text-haedal',
        link: 'text-haedal underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-full px-4 py-1',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
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
