import React from 'react';

import styles from './iconFilter.module.css';

export const IconFilterClose = () => {
  return (
    <svg
      className={styles.iconFilterClose}
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
        <g id="Menu / Close_SM">
          {' '}
          <path
            id="Vector"
            d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{' '}
        </g>{' '}
      </g>
    </svg>
  );
};
