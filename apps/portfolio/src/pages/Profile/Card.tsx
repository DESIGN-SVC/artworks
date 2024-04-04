import { cx } from "cva";

type CardProps = React.ComponentPropsWithoutRef<"section">;

export const Card = ({ className, ...props }: CardProps) => (
  <section
    className={cx([
      "flex flex-col gap-5 transition-colors duration-500",
      "rounded-[0.625rem] p-5 bg-white",
      "dark:bg-violet-1000 w-full",
      "lg:flex-row lg:p-[1.875rem]",
    ])}
    {...props}
  />
);

export const Title = ({
  className,
  label,
}: {
  label: string;
  className?: string;
}) => <h3 className={cx(["font-bold text-selago-900 dark:text-white", className])}>{label}</h3>;

export const Subtitle = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <h4
    className={cx([
      "text-selago-800",
      "w-full lg:mr-auto leading-6",
      "dark:text-selago-200",
      className,
    ])}
  >
    {label}
  </h4>
);
