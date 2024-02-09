import { ComponentPropsWithRef } from "react";
import greenCheck from "/images/green-check.png";

export const GreenCheck = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={greenCheck} alt="Green Check" {...props} />;
};
