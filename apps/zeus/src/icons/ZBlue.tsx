import { ComponentPropsWithRef } from "react";
import  zBlue from "~/assets/z-blue.png";

interface ZBlueProps extends ComponentPropsWithRef<"img"> {
  imgRef: React.RefObject<HTMLImageElement>;
}

export const ZBlue = ({ imgRef, ...props }: ZBlueProps) => {
  return (
    <img
      ref={imgRef}
      src={zBlue}
      alt="Blue Z"
      {...props}
    />
  );
};
