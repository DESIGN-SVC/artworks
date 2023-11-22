import { ComponentPropsWithRef } from "react";

export const BossLogo = ({ ...props }: ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="38"
      viewBox="0 0 124 38"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_27_905)">
        <path
          d="M35.5632 9.2246C35.5905 10.3004 35.3868 11.3695 34.9658 12.3594C34.5448 13.3492 33.9164 14.2367 33.1232 14.9615C31.2292 16.6118 28.9008 17.6794 26.417 18.0364V18.1407C28.4576 18.3077 30.3707 19.2033 31.8086 20.6648C33.1241 22.1137 33.8208 24.022 33.7493 25.9802C33.7983 28.1503 33.1242 30.2747 31.8336 32.0173C30.3724 33.8466 28.4169 35.2153 26.2007 35.9598C23.2878 36.9611 20.2203 37.4343 17.142 37.3575H0L7.73997 0.613245H22.8144C26.1514 0.381417 29.4849 1.111 32.4223 2.71602C33.4661 3.43214 34.3052 4.40953 34.8561 5.55123C35.4071 6.69293 35.6508 7.95927 35.5632 9.2246ZM22.0218 25.7505C22.0412 25.2993 21.9649 24.8492 21.7978 24.4299C21.6307 24.0105 21.3766 23.6316 21.0525 23.3181C20.3143 22.6676 19.3503 22.3348 18.3692 22.3919H14.2298L12.545 29.9017H16.4285C17.8834 29.9869 19.3266 29.596 20.5408 28.7877C21.0172 28.4422 21.4015 27.9844 21.6598 27.4547C21.9181 26.925 22.0424 26.3398 22.0218 25.7505ZM23.8627 11.3774C23.9136 10.8918 23.8459 10.401 23.6654 9.94742C23.4849 9.49385 23.1971 9.09113 22.8268 8.774C21.7306 8.17449 20.4827 7.91192 19.2387 8.01904H17.219L15.7379 14.9615H19.1867C20.3935 15.0125 21.5807 14.6425 22.546 13.9143C22.9495 13.6256 23.2791 13.2453 23.5079 12.8044C23.7368 12.3634 23.8583 11.8745 23.8627 11.3774Z"
          fill="white"
        />
        <path
          d="M70.9036 16.117C70.9328 20.0248 70.0255 23.8824 68.2582 27.3651C66.6459 30.6719 64.095 33.427 60.9259 35.2839C57.5153 37.1664 53.6662 38.1039 49.7745 38C46.8322 38.0802 43.9204 37.3854 41.3294 35.9848C39.002 34.6797 37.1197 32.7027 35.9272 30.3107C34.6466 27.7078 34.0068 24.835 34.0613 21.933C34.027 18.0122 34.9481 14.1424 36.7446 10.6598C38.3907 7.36032 40.9549 4.60982 44.1269 2.74107C47.4533 0.864161 51.2211 -0.0825041 55.0369 -2.73976e-05C57.1652 -0.116592 59.2947 0.20531 61.2942 0.945828C63.2936 1.68635 65.1206 2.82978 66.6625 4.30563C68.1238 5.88806 69.2524 7.7494 69.9811 9.77866C70.7098 11.8079 71.0235 13.9635 70.9036 16.117ZM59.1761 16.4759C59.3 14.6636 58.8097 12.8626 57.7846 11.365C57.3034 10.7763 56.6901 10.3103 55.9948 10.005C55.2995 9.69967 54.5421 9.5638 53.7844 9.60848C52.2334 9.5891 50.734 10.167 49.5951 11.2231C48.304 12.454 47.342 13.9905 46.7974 15.6915C46.1216 17.613 45.7804 19.6368 45.7886 21.6744C45.6577 23.4982 46.1532 25.3121 47.1926 26.8145C47.6613 27.3855 48.2564 27.839 48.9306 28.1389C49.6048 28.4387 50.3395 28.5767 51.0761 28.5417C52.572 28.556 54.0264 28.0487 55.1905 27.1065C56.5394 25.9457 57.5428 24.4342 58.0902 22.7383C58.8232 20.7329 59.1909 18.6117 59.1761 16.4759Z"
          fill="white"
        />
        <path
          d="M96.4557 10.9645C94.9227 10.0762 93.2948 9.36384 91.6029 8.84086C90.1996 8.43246 88.7458 8.22458 87.2846 8.22334C86.3133 8.17179 85.3509 8.43191 84.5369 8.96599C84.2211 9.1816 83.9635 9.4725 83.7874 9.81258C83.6113 10.1527 83.5222 10.5313 83.5281 10.9144C83.5246 11.2779 83.5953 11.6383 83.7359 11.9734C83.8765 12.3085 84.0839 12.6112 84.3456 12.8628C85.4254 13.7693 86.609 14.5437 87.8713 15.1698C90.2276 16.2709 92.3027 17.8961 93.9389 19.9219C95.1498 21.7599 95.7538 23.9332 95.6654 26.1343C95.6957 28.4096 95.0021 30.6354 93.6851 32.4884C92.3155 34.3878 90.4112 35.8334 88.2166 36.6397C85.5692 37.6009 82.7673 38.062 79.9524 37.9999C77.7607 38.0145 75.5759 37.751 73.4501 37.2155C71.608 36.7631 69.8276 36.0878 68.1479 35.2045L70.0637 26.1344C72.88 28.386 76.352 29.6546 79.9524 29.7475C82.6087 29.7475 83.9371 28.7991 83.9378 26.9022C83.9438 26.495 83.8585 26.0916 83.6882 25.7219C83.5179 25.3521 83.267 25.0255 82.954 24.766C81.8934 23.9527 80.7294 23.2848 79.4927 22.7801C77.1942 21.8293 75.163 20.328 73.5769 18.4076C72.332 16.5927 71.7085 14.4213 71.8005 12.2203C71.7774 9.92453 72.4554 7.67662 73.7433 5.77853C75.0523 3.84283 76.9007 2.3366 79.0579 1.44779C81.5388 0.438999 84.1983 -0.053555 86.8749 4.2147e-05C88.9998 -0.0234489 91.1207 0.190647 93.1983 0.638365C94.9161 1.02379 96.6095 1.51141 98.2695 2.09863L96.4557 10.9645Z"
          fill="white"
        />
        <path
          d="M122.186 10.9645C120.653 10.0762 119.025 9.36385 117.333 8.84086C115.93 8.43245 114.476 8.22456 113.015 8.22334C112.044 8.17178 111.081 8.43191 110.267 8.96599C109.952 9.1816 109.694 9.4725 109.518 9.81258C109.342 10.1527 109.253 10.5313 109.259 10.9144C109.255 11.2779 109.326 11.6383 109.466 11.9734C109.607 12.3085 109.814 12.6112 110.076 12.8628C111.156 13.7693 112.339 14.5437 113.602 15.1698C115.958 16.2709 118.033 17.8961 119.669 19.9219C120.88 21.7599 121.484 23.9332 121.396 26.1343C121.426 28.4096 120.733 30.6354 119.416 32.4884C118.046 34.3878 116.142 35.8334 113.947 36.6397C111.3 37.6009 108.498 38.062 105.683 37.9999C103.491 38.0145 101.306 37.751 99.1805 37.2155C97.3385 36.7631 95.558 36.0878 93.8784 35.2045L95.7942 26.1344C98.6105 28.386 102.082 29.6546 105.683 29.7475C108.339 29.7475 109.668 28.7991 109.668 26.9022C109.674 26.495 109.589 26.0916 109.419 25.7219C109.248 25.3521 108.997 25.0255 108.684 24.766C107.624 23.9527 106.46 23.2848 105.223 22.7801C102.925 21.8293 100.893 20.328 99.3074 18.4076C98.0624 16.5927 97.439 14.4213 97.531 12.2203C97.5079 9.92453 98.1858 7.67662 99.4738 5.77853C100.783 3.84284 102.631 2.33661 104.788 1.44779C107.269 0.439003 109.929 -0.0535507 112.605 4.14602e-05C114.73 -0.0234496 116.851 0.190646 118.929 0.638364C120.647 1.02379 122.34 1.5114 124 2.09863L122.186 10.9645Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
export default BossLogo;
