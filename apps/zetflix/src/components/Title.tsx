import { cx } from "cva";

type TitleProps = {
  label: string;
  className?: string;
} & React.HTMLProps<HTMLHeadingElement>;

export const Title = ({ className, label, ...props }: TitleProps) => (
  <h1 className={cx("text-[2rem] font-bold", className)} {...props}>
    {label}
  </h1>
);
