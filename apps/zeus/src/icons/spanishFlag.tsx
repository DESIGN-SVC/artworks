import { ComponentPropsWithRef } from "react";
export const SpanishFlag = ({ ...props }: ComponentPropsWithRef<"img">) => (
  <img 
    src="src/assets/spanish-flag.png" 
    alt="Spanish Flag" 
    {...props} 
  />
);
