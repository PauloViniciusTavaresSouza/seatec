import React from 'react';

import styles from './iconFilter.module.css';

export const IconFilter = () => {
  return (
    <svg
      className={styles.iconSvg}
      width="25px"
      height="25px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <path
          d="M4 7H20M6.99994 12H16.9999M10.9999 17H12.9999"
          stroke="#d4d4d4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{' '}
      </g>
    </svg>
  );
};
