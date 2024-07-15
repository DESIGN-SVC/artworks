import { ComponentPropsWithRef } from "react";
import redClose from "~/assets/image/close-red.png";

export const RedClose = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={redClose} alt="Red Close" {...props} />;
};
