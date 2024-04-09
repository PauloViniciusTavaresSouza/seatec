'use client';
import { usePathname } from 'next/navigation';

import { EmBreve } from '../../components/pages/admin/emBreve/EmBreve';

import { ContainerDivPrincipal } from './styles';

export default function SlugPage() {
  const rotaURL = usePathname();
  return (
    <>
      <ContainerDivPrincipal>
        {rotaURL === '/admin' ? (
          <EmBreve />
        ) : rotaURL === '/admin/funcionario' ? (
          <EmBreve />
        ) : rotaURL === '/admin/funcionario-2' ? (
          <EmBreve />
        ) : (
          ''
        )}
      </ContainerDivPrincipal>
    </>
  );
}
