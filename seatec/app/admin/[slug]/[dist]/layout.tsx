'use client';

import Link from 'next/link';

import { IconPredio } from '../../../components/SVGs/iconPredio/IconPredio';

import {} from '../../style';
import { useValuePesquisaContext } from '../../../Hooks/useContext/context';
import {
  Button_Proximo_passo,
  ContainerChildren,
  Header_Proximo_passo
} from './styles_layout';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const { etapaConcluida } = useValuePesquisaContext();

  console.log(etapaConcluida);

  return (
    <>
      <Header_Proximo_passo>
        <Button_Proximo_passo disabled $proxima_etapa={false}>
          <Link href={'/admin/adicionar-funcionario/formulario'}>
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-2'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-3'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-4'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-5'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-6'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-7'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
        <Button_Proximo_passo
          disabled={etapaConcluida}
          $proxima_etapa={etapaConcluida}
        >
          <Link
            href={
              etapaConcluida === false
                ? '/admin/adicionar-funcionario/formulario/proximo-passo-8'
                : '#'
            }
          >
            <IconPredio />
          </Link>
        </Button_Proximo_passo>
      </Header_Proximo_passo>
      <ContainerChildren>{children}</ContainerChildren>
    </>
  );
}
