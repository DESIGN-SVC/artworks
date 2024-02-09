import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

export const Root = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cx([
      "flex flex-col gap-5",
      "w-full max-w-md p-8 rounded-2xl bg-white",
      "lg:p-[3.125rem]",
    ])}
    {...props}
  />
);

export const Title = ({ ...props }: ComponentPropsWithRef<"h1">) => (
  <h1 className="text-3xl font-semibold text-selago-950" {...props} />
);

export const SubTitle = ({ ...props }: ComponentPropsWithRef<"h5">) => (
  <h5 className="text-selago-700" {...props} />
);
