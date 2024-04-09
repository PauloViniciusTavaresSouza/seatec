'use client';

import Image from 'next/image';
import Link from 'next/link';

import { DIV_spaceBetween, SectionPrincipal_HOME } from './styles';

export const HomePage = () => {
  return (
    <>
      <SectionPrincipal_HOME>
        <Image
          alt="Logo empresa Sea Tec"
          height={150}
          width={150}
          src={'/logo.png'}
        />
        <h1>Desafio Sea Tec</h1>
        <DIV_spaceBetween>
          <button>
            <Link href={'/admin'}>acessar desafio</Link>
          </button>
        </DIV_spaceBetween>
      </SectionPrincipal_HOME>
    </>
  );
};
