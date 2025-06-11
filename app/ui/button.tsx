import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-base text-white font-bold transition-colors cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 hover:bg-primary-600",
        secondary:
          "bg-neutral-0 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white disabled:opacity-30 disabled:border-neutral-500 disabled:text-neutral-800",
        tertiary: "bg-neutral-100 text-neutral-800 hover:text-primary-500",
        ghost:
          "text-neutral-800 hover:text-primary-500 hover:bg-neutral-100 disabled:opacity-30",
      },
      size: {
        default: "h-12 px-4",
        sm: "h-10 px-4",
        lg: "h-14 px-6",
        icon: "tb:h-12 tb:w-12 w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
