import { ComponentPropsWithRef } from "react";
export const Mouse = ({ ...props }: ComponentPropsWithRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1331_26684)">
      <path
        d="M18 3H14C10.134 3 7 6.13401 7 10V22C7 25.866 10.134 29 14 29H18C21.866 29 25 25.866 25 22V10C25 6.13401 21.866 3 18 3Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 14V8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1331_26684">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
