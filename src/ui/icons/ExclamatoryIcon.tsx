import React from 'react';

export const ExclamatoryIcon = () => (
  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_19)">
      <path
        d="M15 22C20.5228 22 25 17.5228 25 12C25 6.47715 20.5228 2 15 2C9.47715 2 5 6.47715 5 12C5 17.5228 9.47715 22 15 22Z"
        stroke="#C6A827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8V12"
        stroke="#C6A827"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="16" r="0.5" fill="black" stroke="#C6A827" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_19"
        x="-1"
        y="0"
        width="32"
        height="32"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_19" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_19" result="shape" />
      </filter>
    </defs>
  </svg>
);
