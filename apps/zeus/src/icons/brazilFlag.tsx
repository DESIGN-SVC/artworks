import { ComponentPropsWithRef } from "react";
export const BrazilFlag = ({ ...props }: ComponentPropsWithRef<"img">) => (
  <img 
    src="src/assets/brazil-flag.png" 
    alt="Brazil Flag" 
    {...props} 
  />
);
