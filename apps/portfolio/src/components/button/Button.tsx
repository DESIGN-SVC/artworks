import { Slot, SlotProps } from "@radix-ui/react-slot";
import { cva, VariantProps } from "cva";
import { ComponentPropsWithRef } from "react";

const twButton = cva(
  [
    "flex items-center justify-center ",
    "py-2.5 font-medium bg-violet-500-600",
    "relative overflow-hidden z-10",
    "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:shadow-none disabled:text-gray-300",
    'disabled:border-gray-300',
    "transition-all duration-500 ease-in-out",
  ],
  {
    variants: {
      appearance: {
        primary: [
          "bg-violet-800 shadow-[inset_0_0_0_0_#360863]",
          "hover:shadow-[inset_0_-100px_0_0_#360863] active:shadow-[inset_0_-100px_0_0_#2A074C]",
          "text-white",
        ],
        secondary: [
          "bg-white border border-selago-200 shadow-[inset_0_0_0_0_#F4F4F9]",
          "hover:shadow-[inset_0_-100px_0_0_#F4F4F9] active:shadow-[inset_0_-100px_0_0_#ffffff]",
          "text-selago-800",
        ],
        tertiary: [
          "bg-pink-700 shadow-[inset_0_0_0_0_#B0046C] hover:shadow-[inset_0_-100px_0_0_#B0046C]",
          "active:shadow-[inset_0_-100px_0_0_#DF008A]",
          "text-white",
        ],
        ghost: [
          "bg-transparent border border-white",
          "text-white",
          "hover:border-selago-100 active:border-selago-200 hover:text-selago-200",
        ],
      },
      size: {
        sm: ["px-2.5 gap-1.5 rounded", "text-xs"],
        md: ["px-3.5 gap-2.5 rounded-md", "h-11 w-full max-w-32", "text-sm"],
        lg: ["px-2.5 gap-3 rounded-lg", "w-full max-w-48 h-12", "text-lg"],
      },
    },
    defaultVariants: {
      size: "md",
      appearance: "primary",
    },
  }
);

export type ButtonProps = {
  asChild?: boolean;
} & VariantProps<typeof twButton> &
  SlotProps &
  ComponentPropsWithRef<"button">;

export const Button = ({
  className,
  size,
  appearance,
  asChild,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={twButton({ className, size, appearance })} {...props} />
  );
};
