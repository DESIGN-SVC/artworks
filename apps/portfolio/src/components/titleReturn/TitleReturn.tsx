import { CaretLeft } from "@phosphor-icons/react";
import { VariantProps, cva } from "cva";
import { ComponentPropsWithRef } from "react";
import { useNavigate } from "react-router-dom";

const twTitleReturn = cva(
  ["flex items-center gap-1", "text-selago-950 dark:text-selago-50 font-bold"],
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

type TitleReturnProps = {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
} & VariantProps<typeof twTitleReturn> &
  ComponentPropsWithRef<"button">;

export const TitleReturn = ({
  label,
  size,
  className,
  ...props
}: TitleReturnProps) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };
  
  return (
    <button
      className={twTitleReturn({ className, size })}
      onClick={handleReturn}
      {...props}
    >
      <CaretLeft />
      <p>{label}</p>
    </button>
  );
};
