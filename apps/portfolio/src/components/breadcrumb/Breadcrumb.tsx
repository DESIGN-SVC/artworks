import { ArrowRight } from "@phosphor-icons/react";
import { VariantProps, cva } from "cva";
import { ComponentPropsWithRef } from "react";
import { useNavigate } from "react-router-dom";

const twBreadcrumb = cva(
  ["flex flex-row items-center gap-[14px] w-fit dark:text-selago-500"],
  {
    variants: {
      size: {
        sm: ["text-sm"],
        md: ["text-md"],
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

type BreadcrumbProps = {
  size?: "sm" | "md";
  className?: string;
  pages: string[];
} & VariantProps<typeof twBreadcrumb> &
  ComponentPropsWithRef<"ul">;

export const Breadcrumb = ({
  pages,
  size,
  className,
  ...props
}: BreadcrumbProps) => {
  const navigate = useNavigate();
  const handleBackClick = (index: number) => {
    navigate(-(pages.length - index - 1));
  };

  return (
    <ul className={twBreadcrumb({ className, size })} {...props}>
      {pages.map((page, index) => (
        <li>
          {index === pages.length - 1 ? (
            <p className="font-semibold text-selago-800 dark:text-selago-50">
              {page}
            </p>
          ) : (
            <button
              className="flex items-center gap-1.5 text-selago-300"
              onClick={() => handleBackClick(index)}
            >
              <p>{page}</p>
              <span>
                <ArrowRight />
              </span>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
