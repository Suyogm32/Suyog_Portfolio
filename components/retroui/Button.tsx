import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { Button as BaseButton } from "@base-ui/react/button";

export const buttonVariants = cva(
  "font-head transition-all rounded duration-300 font-semibold flex justify-center items-center disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        default:
          "shadow-md bg-primary text-primary-foreground border-2 border-black hover:-translate-y-1 hover:shadow-lg hover:rotate-[-0.5deg] active:translate-y-0.5 active:rotate-0 active:shadow-sm hover:bg-primary-hover hover:[box-shadow:4px_4px_0_0_var(--shadow-color),0_8px_24px_rgba(236,72,153,0.25)]",
        secondary:
          "shadow-md bg-secondary text-secondary-foreground border-2 border-black hover:-translate-y-1 hover:shadow-lg hover:rotate-[0.5deg] active:translate-y-0.5 active:shadow-sm hover:bg-secondary-hover",
        outline:
          "shadow-md bg-card border-2 border-black hover:-translate-y-1 hover:border-purple hover:shadow-lg hover:text-purple active:translate-y-0.5 active:shadow-sm",
        link: "bg-transparent hover:underline underline-offset-4 decoration-purple",
        ghost:
          "bg-transparent hover:text-purple",
      },
      size: {
        sm: "min-h-11 px-3 py-2 text-sm",
        md: "min-h-11 px-4 py-2.5 text-base",
        lg: "min-h-12 px-7 py-3 text-base lg:text-lg",
        icon: "min-h-11 min-w-11 p-2.5",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  render?: React.ReactElement | ((props: Record<string, any>) => React.ReactElement);
}

export const Button = ({
  children,
  size = "md",
  className = "",
  variant = "default",
  render,
  ref,
  ...props
}: IButtonProps & { ref?: React.Ref<HTMLButtonElement> }) => {
  return (
    <BaseButton
      ref={ref}
      data-cursor-hover
      className={cn(buttonVariants({ variant, size }), className)}
      render={render}
      {...props}
    >
      {children}
    </BaseButton>
  );
};
