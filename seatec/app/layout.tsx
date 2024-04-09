import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';

import { ScrollTop } from './components/scrollTop/scrollTop';

import './globals.css';
import { ValuePesquisaContextProvider } from './Hooks/useContext/context';
import StyledComponentsRegistry from './lib/registry';

export const metadata = {
  title: 'Biblioteca de Regulação do Trabalho em Saúde',
  description: 'Biblioteca de Regulação do Trabalho em Saúde'
};

interface Props {
  children: React.ReactNode;
}

const myFont = localFont({ src: './fonts/Montserrat-Medium.ttf' });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={`${myFont.className}`}>
        <StyledComponentsRegistry>
          <ValuePesquisaContextProvider>
            {children}
            <ToastContainer />
            <ScrollTop />
          </ValuePesquisaContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
