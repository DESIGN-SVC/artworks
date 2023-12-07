import { ComponentPropsWithRef } from "react";
import  zeusBlue from "../assets/zeus-blue.png";

interface ZeusBlueProps extends ComponentPropsWithRef<"img"> {
  imgRef: React.RefObject<HTMLImageElement>;
}

export const ZeusBlue = ({imgRef, ...props }: ZeusBlueProps) => {
  return (
    <img
      ref={imgRef}
      src={zeusBlue}
      alt="Blue Zeus"
      {...props}
    />
  );
};
