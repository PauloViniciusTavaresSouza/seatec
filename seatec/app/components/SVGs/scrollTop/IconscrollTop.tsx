import React from 'react';

import styles from './IconscrollTop.module.css';

export const IconscrollTop = () => {
  return (
    <>
      <div className={styles.iconScrollTop}>
        <svg
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
              d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 7L12 3M12 3L16 7M12 3V15"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{' '}
          </g>
        </svg>
      </div>
    </>
  );
};
