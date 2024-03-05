import { CaretLeft, ArrowRight } from "@phosphor-icons/react";
import { VariantProps, cva } from "cva";
import { ComponentPropsWithRef } from "react";

const twCaret = cva(
  [
    "flex items-center gap-1",
    "text-selago-950 dark:text-selago-50 font-bold",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm"],
        md: ["text-2xl"],
        lg: ["text-3xl"],
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

type CaretProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
} & VariantProps<typeof twCaret> &
  ComponentPropsWithRef<"button">;

export const Caret = ({ label, size, className, ...props }: CaretProps) => (
  <button className={twCaret({ className, size })} {...props}>
    <CaretLeft />
    <p>{label}</p>
  </button>
);

const twArrow = cva(
  ["flex items-center gap-1.5", "text-selago-300 dark:text-selago-500"],
  {
    variants: {
      size: {
        sm: ["text-sm"],
        md: ["text-md"],
      },
      current: {
        true: ["font-semibold text-selago-800 dark:!text-selago-50"],
      },
    },
    defaultVariants: {
      size: "sm",
      current: false,
    },
  }
);

type ArrowProps = {
  label: string;
  current: boolean;
  size?: "sm" | "md";
  className?: string;
} & VariantProps<typeof twArrow> &
  ComponentPropsWithRef<"button">;

export const Arrow = ({
  label,
  current,
  size,
  className,
  ...props
}: ArrowProps) => (
  <button className={twArrow({ className, size, current })} {...props}>
    <p>{label}</p>
    {!current && <ArrowRight />}
  </button>
);
