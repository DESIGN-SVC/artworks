import { ComponentPropsWithoutRef } from "react";
import image1x from "../assets/image/logo@1x.png";
import image2x from "../assets/image/logo@2x.png";
export const Logo = (props: ComponentPropsWithoutRef<"img">) => (
  <img src={image1x} srcSet={`${image1x} 1x, ${image2x} 2x`} {...props} />
);
