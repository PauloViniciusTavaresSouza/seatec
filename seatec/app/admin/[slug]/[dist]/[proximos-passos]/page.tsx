'use client';

import React from 'react';

import { EmBreve } from '../../../../components/pages/admin/emBreve/EmBreve';

import { SectionPrincipal } from './stylePage';

export default function adminPageDist() {
  return (
    <>
      <SectionPrincipal>
        <EmBreve />
      </SectionPrincipal>
    </>
  );
}
