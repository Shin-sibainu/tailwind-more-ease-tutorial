import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const buttonVariants = cva(
  "rounded-md transition-all duration-200 font-medium text-white shadow border",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 hover:bg-sky-600",
        secondary: "bg-slate-500 hover:bg-slate-600",
        danger: "bg-red-500 hover:bg-red-600",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-4",
        lg: "text-xl px-8 py-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  console.log({ ...props });
  return (
    <button
      // className={twMerge(
      //   `border bg-sky-500 px-6 py-3 text-white rounded-md shadow text-lg font-medium hover:bg-sky-600 transition-all duration-150`,
      //   className
      // )}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, buttonVariants };
