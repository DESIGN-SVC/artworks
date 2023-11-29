import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

interface ImagePersonaProps extends ComponentPropsWithRef<"img"> {
  img: {
    src: string;
    srcSet: string;
    alt: string;
  };
}

export const ImagePersona = ({
  img: { src, srcSet, alt },
  ...props
}: ImagePersonaProps) => (
  <img
    className={cx([
      "order-2 w-full mt-auto",
      "md:w-auto md:self-center",
      "lg:order-1 lg:relative",
      "lg:row-span-2 lg:h-full",
      "lg:bottom-0 lg:pt-20",
    ])}
    src={src}
    srcSet={srcSet}
    alt={alt}
    {...props}
  />
);
