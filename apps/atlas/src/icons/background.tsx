import { ComponentPropsWithRef } from "react";

export const Background = ({ ...props }: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      width="320"
      height="751"
      viewBox="0 0 320 751"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M135.172 0H182.043L225.682 98.1873L272.149 0H319.829L233.357 169.302C233.357 169.302 232.244 173.863 225.682 173.747C219.178 173.632 218.338 169.302 218.338 169.302L135.172 0ZM6.10352e-05 198.802H46.8714L90.5102 296.989L136.977 198.802H184.657L98.1856 368.104C98.1856 368.104 97.0721 372.665 90.5102 372.549C84.0063 372.433 83.1662 368.104 83.1662 368.104L6.10352e-05 198.802ZM184.657 570.249H137.785L94.1467 668.436L47.6794 570.249H0L86.4713 739.551C86.4713 739.551 87.5848 744.112 94.1467 743.996C100.651 743.881 101.491 739.551 101.491 739.551L184.657 570.249ZM182.043 381.228H135.172L218.338 550.531C218.338 550.531 219.178 554.86 225.682 554.975C232.244 555.091 233.357 550.531 233.357 550.531L319.828 381.228H272.149L225.682 479.416L182.043 381.228Z"
        fill="url(#paint0_linear_61_68)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.8713 188.749H0L83.1661 19.4469C83.1661 19.4469 84.0063 15.1173 90.5101 15.0022C97.072 14.886 98.1855 19.4469 98.1855 19.4469L184.657 188.749H136.977L90.5101 90.562L46.8713 188.749ZM135.172 369.968H182.043L225.682 271.78L272.149 369.968H319.828L233.357 200.665C233.357 200.665 232.244 196.104 225.682 196.22C219.178 196.336 218.338 200.665 218.338 200.665L135.172 369.968ZM0 561.186H46.8713L90.5101 462.999L136.977 561.186H184.657L98.1855 391.884C98.1855 391.884 97.072 387.323 90.5101 387.439C84.0063 387.554 83.1661 391.884 83.1661 391.884L0 561.186ZM312.719 750.207H265.848L222.209 652.019L175.742 750.207H128.062L214.533 580.904C214.533 580.904 215.647 576.344 222.209 576.46C228.713 576.575 229.553 580.904 229.553 580.904L312.719 750.207Z"
        fill="url(#paint1_linear_61_68)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_61_68"
          x1="160"
          y1="46.5"
          x2="159.914"
          y2="743.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00B0BA" />
          <stop offset="1" stop-color="#00777E" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_61_68"
          x1="159.914"
          y1="15"
          x2="159.914"
          y2="750.207"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#525C78" stop-opacity="0.44" />
          <stop offset="1" stop-color="#525C78" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Background;
