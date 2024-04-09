'use client';

import { createContext, useContext, useState } from 'react';

import { PropsFormContact } from '../../components/pages/admin/addFuncionario/addFuncionario';

interface ContextType {
  etapaConcluida: boolean;
  setEtapaConcluida: (value: boolean) => void;
  data: PropsFormContact[] | undefined;
  setData: React.Dispatch<React.SetStateAction<PropsFormContact[] | undefined>>;
}

const ValuePesquisaContext = createContext<ContextType>({
  etapaConcluida: false,
  setEtapaConcluida: () => {},
  data: [
    {
      id_funcionario: '',
      nome: '',
      cpf: '',
      dt_nascimento: '',
      sexo: '',
      status: false,
      rg: '',
      cargo: '',
      atividade: '',
      epi: '',
      nu_ca: ''
    }
  ],
  setData: () => [{}]
});

export function useValuePesquisaContext() {
  return useContext(ValuePesquisaContext);
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export function ValuePesquisaContextProvider({
  children
}: ContextProviderProps) {
  const [etapaConcluida, setEtapaConcluida] = useState<boolean>(true);
  const [data, setData] = useState<PropsFormContact[] | undefined>([
    {
      id_funcionario: '',
      nome: '',
      cpf: '',
      dt_nascimento: '',
      sexo: '',
      status: '',
      rg: '',
      cargo: '',
      atividade: '',
      epi: '',
      nu_ca: ''
    }
  ]);

  return (
    <ValuePesquisaContext.Provider
      value={{
        etapaConcluida,
        setEtapaConcluida,
        data,
        setData
      }}
    >
      {children}
    </ValuePesquisaContext.Provider>
  );
}
