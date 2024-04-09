import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type {
  DialogContentProps,
  DialogTitleProps,
  DialogCloseProps,
} from "@radix-ui/react-dialog";

type ContentProps = DialogContentProps;
export const Content = ({ className, children, ...props }: ContentProps) => (
  <Dialog.Portal>
    className,
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-popShowIn  data-[state=closed]:animate-popShowOut" />
    <Dialog.Content
      className={cx([
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "z-[100] rounded-2xl w-[29.25rem] bg-white dark:bg-violet-1000",
        className,
      ])}
      {...props}
    >
      {children}
    </Dialog.Content>
  </Dialog.Portal>
);

type TitleProps = DialogTitleProps;

export const Title = ({ className, ...props }: TitleProps) => (
  <Dialog.Title
    className={`m-8 mr-auto mb-10 text-[1.375rem]/[43px] font-bold text-selago-950 dark:text-selago-50 ${className}`}
    {...props}
  />
);

export const ButtonArea = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="w-full flex gap-5 p-5 rounded-b-[0.625rem] border-t border-selago-200 dark:border-violet-900 bg-selago-50 dark:bg-violet-950"
    {...props}
  />
);

type CloseProps = DialogCloseProps;

export const Close = ({ asChild, ...props }: CloseProps) => (
  <Dialog.Close
    className={`cursor-pointer ${!asChild ? "absolute top-[1.875rem] right-[1.875rem]" : "w-full"}`}
    {...props}
  />
);

export {
  Description,
  Root,
  Trigger,
  type DialogContentProps,
} from "@radix-ui/react-dialog";
