import * as Dialog from "@radix-ui/react-dialog";
import { cx } from "cva";

type ContentProps = Dialog.DialogContentProps;
export const Content = ({ className, children, ...props }: ContentProps) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
    <Dialog.Content
      className={cx([
        "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ",
        "z-[100] rounded-12 bg-white rounded-xl overflow-hidden",
        "transition-all duration-500 ease-in-out",
        "dark:bg-violet-1000 data-[state=open]:animate-contentShow",
        className,
      ])}
      {...props}
    >
      {children}
    </Dialog.Content>
  </Dialog.Portal>
);

export {
  Close,
  Description,
  Root,
  Title,
  Trigger,
  type DialogContentProps,
} from "@radix-ui/react-dialog";
