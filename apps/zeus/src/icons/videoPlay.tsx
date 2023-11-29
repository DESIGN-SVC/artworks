import { ComponentPropsWithRef } from "react";
export const VideoPlay = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="91"
    height="91"
    viewBox="0 0 91 91"
    fill="none"
    {...props}
  >
    <circle cx="45.5" cy="45.5" r="45.5" fill="#EDEDED" />
    <path d="M67 45L34 64.0526V25.9474L67 45Z" fill="#414141" />
  </svg>
);
