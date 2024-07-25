import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { GreenCheck, RedClose } from "~/icons";

export const Root = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cx([
      "flex flex-col gap-5",
      "w-full max-w-md p-8 rounded-xl bg-white",
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

type SuccessProps = {
  title: string;
  description: string;
};
export const Success = ({ description, title }: SuccessProps) => (
  <div className="flex flex-col gap-8">
    <GreenCheck className="w-20" />
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-selago-950">{title}</h2>
      <p className="text-selago-700">{description}</p>
    </div>
  </div>
);

type ErrorProps = {
  title: string;
  description: string;
};
export const Error = ({ description, title }: ErrorProps) => (
  <div className="flex flex-col gap-8">
    <RedClose className="w-20" />
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-selago-950">{title}</h2>
      <p className="text-selago-700">{description}</p>
    </div>
  </div>
);
