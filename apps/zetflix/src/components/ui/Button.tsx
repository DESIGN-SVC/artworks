import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "cva";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof button> {
  asChild?: boolean;
}
const button = cva(
  [
    "w-full rounded-full  px-5 py-3 outline outline-2 outline-transparent ",
    "relative z-10 overflow-hidden duration-300 ",
    "flex items-center justify-center",
    "text-center font-medium ",
    'before:absolute before:left-[-100%] before:top-0 before:z-[-1] before:h-[10000%] before:w-full before:rounded-full   before:duration-300 before:content-[""] ',
    "focus:outline-gray-100 active:outline-gray-100",
    "hover:before:-translate-y-2/4 hover:before:translate-x-full hover:before:duration-500 ",
  ],
  {
    variants: {
      theme: {
        primary: ["bg-yellow-100 text-gray-900", "before:bg-yellow-200"],
        secondary: ["bg-gray-900 text-gray-200", "before:bg-gray-700"],
      },
    },
    defaultVariants: {
      theme: "primary",
    },
  }
);
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, children, className, theme, ...rest }, ref) => {
    const Root = asChild ? Slot : "button";
    return (
      <Root className={button({ className, theme })} ref={ref} {...rest}>
        {children}
      </Root>
    );
  }
);
