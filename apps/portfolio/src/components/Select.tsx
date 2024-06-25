import { cx } from "cva";
import { ReactNode, forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import { CaretDown, Check } from "@phosphor-icons/react";

type SelectProps = Select.SelectPopperPrivateProps & {
  placeholder?: string;
  children: ReactNode;
};

export const Root = ({ children, placeholder, ...props }: SelectProps) => (
  <Select.Root {...props}>
    <Select.Trigger className="flex justify-between items-center w-full text-selago-700 outline-none dark:text-selago-500">
      <Select.Value placeholder={placeholder} />
      <Select.Icon>
        <CaretDown />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded-md shadow-md dark:bg-violet-900">
        <Select.Viewport className="p-[5px]">{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export const Item = forwardRef<HTMLDivElement, Select.SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={cx([
          "outline-none cursor-pointer",
          "flex items-center justify-between",
          "relative",
          "text-selago-700 text-xs py-1",
          "dark:text-selago-500",
        ])}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute right-0 w-[25px] inline-flex items-center justify-center">
          <Check />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);
