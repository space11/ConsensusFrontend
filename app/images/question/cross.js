import React from 'react';

export default function() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 33 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 27C25.4036 27 31 21.4036 31 14.5C31 7.59644 25.4036 2 18.5 2C11.5964 2 6 7.59644 6 14.5C6 21.4036 11.5964 27 18.5 27Z"
          fill="#9B9B9B"
        />
      </g>
      <path
        d="M23.1819 17.0775L20.8545 14.7502L23.1819 12.4228C23.7537 11.851 23.7414 10.9028 23.1694 10.3308C22.5974 9.75877 21.6492 9.74657 21.0774 10.3183L18.75 12.6457L16.4226 10.3183C15.8508 9.74657 14.9026 9.75877 14.3306 10.3308C13.7586 10.9028 13.7463 11.851 14.3181 12.4228L16.6455 14.7502L14.3181 17.0775C13.7463 17.6493 13.7586 18.5975 14.3306 19.1695C14.9026 19.7415 15.8508 19.7537 16.4226 19.182L18.75 16.8546L21.0774 19.182C21.6492 19.7537 22.5974 19.7415 23.1694 19.1695C23.7414 18.5975 23.7537 17.6493 23.1819 17.0775Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="37"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
