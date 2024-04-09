'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { CloseIcon } from '../components/SVGs/closeIcon/close';
import { MenuIcon } from '../components/SVGs/menuHamburguer/menuIcon';

import {
  ButtonClose,
  ContainerMenu_Layout,
  SectionMenuDrop_Mobile,
  SectionPrincipal_Admin_Layout,
  SectionPrincipal_Layout
} from './style';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [dropSideBar, setDropSideBar] = useState(true);
  const [dropMenu, setDropMenu] = useState(false);

  function handleDropMenu() {
    if (dropMenu) {
      setDropMenu(false);
    } else {
      setDropMenu(true);
    }
  }
  function handleActive() {
    if (dropSideBar) {
      setDropSideBar(false);
    } else {
      setDropSideBar(true);
    }
  }

  return (
    <>
      <SectionPrincipal_Layout>
        <ContainerMenu_Layout $active={dropSideBar}>
          <ButtonClose $active={dropSideBar} onClick={handleActive}>
            <CloseIcon />
          </ButtonClose>
          <nav>
            <ul>
              <Link href={'/admin'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/homeIcon.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'Pagina de ADM'
                  )}
                </li>
              </Link>
              <Link href={'/admin/adicionar-funcionario/formulario'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/homeIcon.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'formulario '
                  )}
                </li>
              </Link>
              <Link href={'/admin/funcionario'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/Icone3.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'funcionario'
                  )}
                </li>
              </Link>
              <Link href={'/admin/funcionario-2'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/Icone4.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'funcionario-2'
                  )}
                </li>
              </Link>
              <Link href={'/admin/funcionario-3'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/Icone5.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'funcionario-3'
                  )}
                </li>
              </Link>
              <Link href={'/admin/funcionario-4'}>
                <li>
                  {dropSideBar ? (
                    <Image
                      src={'/Icone6.png'}
                      width={35}
                      height={35}
                      alt="imagem Icon Home"
                    />
                  ) : (
                    'funcionario-4'
                  )}
                </li>
              </Link>
            </ul>
          </nav>
        </ContainerMenu_Layout>
        {dropMenu && (
          <>
            <nav>
              <ul>
                <li>
                  <Link href={'/admin'}>Pagina de ADM</Link>
                </li>
                <li>
                  <Link href={'/admin/adicionar-regulacao/'}>
                    Adicionar Regulação
                  </Link>
                </li>
                <li>
                  <Link href={'/admin/teste'}>Adicionar Normativo</Link>
                </li>
                <li>
                  <Link href={'/admin/teste'}>Adicionar Normativo</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
        <SectionMenuDrop_Mobile $active={false}>
          <button onClick={handleDropMenu}>
            <MenuIcon />
          </button>
        </SectionMenuDrop_Mobile>
        <SectionPrincipal_Admin_Layout>
          {children}
        </SectionPrincipal_Admin_Layout>
      </SectionPrincipal_Layout>
    </>
  );
}
