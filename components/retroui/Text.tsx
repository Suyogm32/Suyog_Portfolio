import { ElementType, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head", {
  variants: {
    as: {
      p: "font-sans text-base font-normal",
      li: "font-sans text-base font-normal",
      a: "font-sans text-base hover:underline underline-offset-4 decoration-purple",
      h1: "text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
      h3: "text-xl font-semibold tracking-tight sm:text-2xl",
      h4: "text-lg font-medium",
      h5: "text-base font-medium",
      h6: "text-sm font-medium",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = (props: TextProps) => {
  const { className, as, ...otherProps } = props;
  const Tag: ElementType = as || "p";

  return (
    <Tag className={cn(textVariants({ as }), className)} {...otherProps} />
  );
};
