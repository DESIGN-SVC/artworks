import { ComponentPropsWithRef } from "react";
import monitor from "~/assets/image/monitor.png";

export const Monitor = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={monitor} alt="Monitor" {...props} />;
};
