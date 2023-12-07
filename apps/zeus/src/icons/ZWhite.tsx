import { ComponentPropsWithRef } from "react";
import  zWhite from "../assets/z-white.png";

interface ZWhiteProps extends ComponentPropsWithRef<"img"> {
  imgRef: React.RefObject<HTMLImageElement>;
}

export const ZWhite = ({imgRef, ...props }: ZWhiteProps) => {
  return (
    <img
      ref={imgRef}
      src={zWhite}
      alt="White Z"
      {...props}
    />
  );
};
