import { X } from "@phosphor-icons/react";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithRef } from "react";
import { ModalGeneric } from "~/components";

type RootProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  asChild?: boolean;
} & ComponentPropsWithRef<"form">;

export const Root = ({ onOpenChange, open, asChild, ...props }: RootProps) => {
  const Comp = asChild ? Slot : "form";
  return (
    <ModalGeneric.Root
      open={open}
      onOpenChange={(e) => {
        onOpenChange(e);
      }}
    >
      <ModalGeneric.Content
        className="w-full max-w-md"
        aria-describedby={undefined}
        asChild
      >
        <Comp {...props} />
      </ModalGeneric.Content>
    </ModalGeneric.Root>
  );
};

type ContentProps = ComponentPropsWithRef<"div"> & {
  title: string;
};
const Content = ({ title, children }: ContentProps) => (
  <div className="pt-8 pb-16 space-y-10 px-8">
    <header className="flex  justify-between">
      <ModalGeneric.Title className="text-2xl font-bold text-selago-950 dark:text-selago-50">
        {title}
      </ModalGeneric.Title>
      <ModalGeneric.Close className="h-fit text-selago-950 dark:text-selago-50">
        <X weight="bold" size={25} />
      </ModalGeneric.Close>
    </header>
    {children}
  </div>
);
type FooterProps = ComponentPropsWithRef<"footer">;
const Footer = ({ ...props }: FooterProps) => (
  <footer
    className="flex gap-5 p-5 bg-selago-50 border-t border-selago-200 dark:bg-violet-950 dark:border-violet-900"
    {...props}
  />
);

export const FormDialog = {
  Root,
  Content,
  Footer,
  Close: ModalGeneric.Close,
};
