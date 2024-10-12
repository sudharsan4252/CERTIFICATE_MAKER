import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import cn from '@/lib/utils'; // Assuming you have a `cn` utility for combining class names.

export const buttonVariants = cva(
    'px-4 py-2 rounded font-semibold transition', // Base styles
    {
        variants: {
            variant: {
                primary: 'bg-blue-500 text-white hover:bg-blue-600',
                secondary: 'bg-gray-500 text-white hover:bg-gray-600',
                signin:'bg-green-500 text-white hover:bg-green-600'
            },
            size: {
                small: 'text-sm',
                large: 'text-lg',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'small',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
    // if you wanted to add additional you can add them here

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export default Button;
