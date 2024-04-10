import { X } from "@phosphor-icons/react";
import * as ToastRadix from "@radix-ui/react-toast";
import type { ToastProps } from "@radix-ui/react-toast";
import { VariantProps, cva, cx } from "cva";
import { ComponentPropsWithRef } from "react";

const TwToast = cva(
  [
    "flex flex-row w-full max-w-[18.75rem] h-full justify-between items-center",
    "p-5 rounded-lg gap-5 text-[0.875rem] leading-none text-wrap",
    "data-[state=closed]:transition-[transform_300ms_ease-out] data-[state=closed]:animate-hide",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
    "",
  ],
  {
    variants: {
      success: {
        true: "bg-green-200 text-selago-950",
        false: "bg-red-700 text-selago-50",
      },
      direction: {
        left: "data-[state=open]:animate-slideInLeft data-[swipe=end]:animate-swipeOutLeft",
        right:
          "data-[state=open]:animate-slideInRight data-[swipe=end]:animate-swipeOutRight",
      },
    },
    defaultVariants: {
      success: true,
    },
  }
);

const TwToastViewport = cva(
  [
    "[--viewport-padding:_25px] fixed flex flex-col",
    "p-[var(--viewport-padding)] gap-2.5 m-0",
    "list-none max-w-screen z-50 outline-none",
  ],
  {
    variants: {
      position: {
        top: "top-0",
        middle: "top-1/2 transform -translate-y-1/2",
        bottom: "bottom-0",
      },
      direction: {
        left: "left-0",
        right: "right-0",
      },
    },
    defaultVariants: {
      position: "bottom",
    },
  }
);

type RootProps = {
  direction: "left" | "right";
  position: "top" | "middle" | "bottom";
  icon?: React.ReactNode;
} & ComponentPropsWithRef<typeof ToastRadix.Provider> &
  VariantProps<typeof TwToast> &
  VariantProps<typeof TwToastViewport> &
  ToastProps;

export const Toast = ({
  success,
  icon,
  label,
  position,
  direction,
  className,
  ...props
}: RootProps) => (
  <aside className="absolute">
    <ToastRadix.Provider swipeDirection={direction}>
      <ToastRadix.Root
        className={cx(TwToast({ success, direction }), className)}
        duration={4000}
        {...props}
      >
        <article className="flex flex-row gap-4 items-center">
          <span className="min-w-fit">{icon}</span>
          <span>{label}</span>
        </article>
        <ToastRadix.Close className="cursor-pointer" asChild>
          <X className="min-w-fit" size={14} />
        </ToastRadix.Close>
      </ToastRadix.Root>
      <ToastRadix.Viewport
        className={TwToastViewport({ position, direction })}
      />
    </ToastRadix.Provider>
  </aside>
);
