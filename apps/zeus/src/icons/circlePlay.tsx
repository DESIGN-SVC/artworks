import { ComponentPropsWithRef } from "react";
export const CirclePlay = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    {...props}
  >
    <circle
      cx="15"
      cy="15"
      r="14"
      fill="white"
      stroke="#212930"
      stroke-width="2"
    />
    <path
      d="M21.0634 14.2782C21.3843 14.4759 21.3794 14.944 21.0545 15.135L12.5721 20.1194C12.2368 20.3164 11.8148 20.072 11.8188 19.6831L11.9247 9.53834C11.9288 9.14943 12.3558 8.91386 12.6869 9.11786L21.0634 14.2782Z"
      fill="#212930"
      stroke="#212930"
    />
  </svg>
);
