import { ComponentPropsWithRef } from "react";
import palette from "/images/palette.png";

export const Palette = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={palette} alt="Palette" {...props} />;
};
