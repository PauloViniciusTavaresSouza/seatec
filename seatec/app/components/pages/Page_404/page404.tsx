import Link from 'next/link';
import React from 'react';

import styles from './page404.module.css';

import { Icon404 } from '../../SVGs/404/404';

export const Page404 = () => {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <div className={styles.container}>
          <div className={styles.containerInfo}>
            <h1>Xiiiii !</h1>
            <p>
              Não foi possível encontrar a página. <br /> Mas não se preocupe,
              volte a página principal
            </p>
            <Link href="/">Retornar a Página Principal</Link>
          </div>
          <Icon404 />
        </div>
      </div>
    </>
  );
};
