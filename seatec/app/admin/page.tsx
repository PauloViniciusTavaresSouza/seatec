import { Admin } from '../components/pages/admin/adm/admin';

export const metadata = {
  title: 'Administrador',
  description: 'Administrador Aplicação'
};

export default async function adminPage() {
  return (
    <>
      <Admin />
    </>
  );
}
