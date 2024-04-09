'use client';

import React, { useEffect, useState } from 'react';

import styles from './scrollTop.module.css';

import { IconscrollTop } from '../SVGs/scrollTop/IconscrollTop';

export const ScrollTop = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setMostrarComponente(true);
      } else {
        setMostrarComponente(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {mostrarComponente && (
        <div onClick={scrollToTop} className={styles.containerPrincipal}>
          <IconscrollTop />
        </div>
      )}
    </>
  );
};
