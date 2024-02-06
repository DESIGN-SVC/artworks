import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";

const tw = cva(
  [
    "flex items-center justify-center ",
    "py-2.5 font-medium bg-violet-500-600",
    "relative overflow-hidden z-10",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      appearance: {
        primary: ["bg-purple-700", "text-white"],
        secondary: ["bg-white", "text-violet-600"],
        tertiary: ["bg-pink-700", "text-white"],
        ghost: ["bg-transparent border", "text-white"],
      },
      size: {
        sm: ["px-2.5 gap-1.5 rounded", "text-xs"],
        md: ["px-3.5 gap-2.5 rounded-md", "text-sm"],
        lg: ["px-2.5 gap-3 rounded-lg", "text-lg"],
      },
      hover: {
        primary: [
          "transition-all duration-500 ease-in-out shadow-[inset_0_0_0_0_#725AC1]",
          "hover:shadow-[inset_0_-100px_0_0_#725AC1]",
        ],
        secondary: [
          "transition-all ease-in duration-300",
          'after:content-[""] after:w-full after:h-full after:duration-300 after:ease-in',
          "after:bg-black after:absolute after:-bottom-full after:-z-10 after:rounded-3xl",

          "hover:after:bottom-0 hover:after:rounded-sm",
        ],
        tertiary: [
          "duration-300 transition-all",
          'before:content-[""] before:w-0 before:h-20  before:absolute ',
          "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
          "before:duration-500 ease-in-out before:transition-all before:-z-10 before:bg-black",
          "hover:before:w-full hover:before:h-[300%]",
        ],
        quaternary: [
          'before:content-[""] before:block before:w-0 before:h-0 before:transition-all before:duration-500 before:ease-in-out',
          "before:-top-4 before:-left-4",
          "before:-translate-y-2/4 before:-translate-x-2/4 before:absolute before:rounded-full before:z-[-1]",
          'after:content-[""] after:block after:w-0 after:h-0 after:transition-all after:duration-500 after:ease-in-out',
          "after:-translate-y-2/4 after:-translate-x-2/4 after:absolute after:rounded-full after:z-[-1]",
          "after:top-[calc(100%_+_1em)] after:left-[calc(100%_+_1em)]  ",
          "hover:before:w-[135%] hover:before:h-[200px] hover:after:w-[135%] hover:after:h-[200px]",

          'after:bg-black before:bg-black'
        ],
      },
    },
    defaultVariants: {
      size: "md",
      appearance: "primary",
      hover: "secondary",
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & VariantProps<typeof tw> &
  ComponentProps<"button">;

const url = import.meta.env.PUBLIC_ENABLE_URL_STORYBOOK

export const Button = ({
  className,
  size,
  appearance,
  hover,
  ...props
}: ButtonProps) => {
  console.log(url)
  return <button className={tw({ className, size, appearance,hover })} {...props} />;
};
