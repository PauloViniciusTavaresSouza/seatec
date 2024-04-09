'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useValuePesquisaContext } from '../../../../Hooks/useContext/context';
import ImageWithPrefix from '../../../ImagePrefix/Image';
import {
  AddButton,
  Add_Funcionario_DIV,
  ButtonNext,
  Cabecalho_FORM,
  Card,
  CardInfo,
  ContainerAdd_Funcionario_DIV,
  ContainerForm_addFuncionario,
  ContainerPrincipal_AddFuncionario,
  ContainerSpaceBetween,
  ContainerUserAdd,
  DIV_FORM_NAME_SEXO,
  DIV_Inputs,
  DIV_input_ATIV_INATIVO,
  EditarCard,
  FuncionarioBio_DIV,
  ListaFuncionario,
  SectionPrincipal_AddFuncionario,
  Switch,
  SwitchEtapa
} from './styles';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { z } from 'zod';

const schema = z.object({
  id_funcionario: z.string(),
  nome: z.string(),
  cpf: z.string(),
  dt_nascimento: z.string(),
  sexo: z.string(),
  status: z.union([z.boolean(), z.string()]),
  rg: z.string(),
  cargo: z.string(),
  atividade: z.string(),
  epi: z.string(),
  nu_ca: z.string()
});

export type PropsFormContact = z.infer<typeof schema>;

export const AddFuncionario = () => {
  const { etapaConcluida, setEtapaConcluida } = useValuePesquisaContext();
  const { data, setData } = useValuePesquisaContext();

  const [addfunc, setAddFunc] = useState<boolean>(false);

  useEffect(() => {
    const getFuncionarios = async () => {
      try {
        const res = await axios.get('http://localhost:8800/user');
        setData(res.data);
      } catch (error) {
        throw new Error(`erro - ${error}`);
      }
    };
    getFuncionarios();
  }, [setData]);

  const redirect = useRouter();

  function handleRedirect() {
    redirect.push('/admin/adicionar-funcionario/formulario/proximo-passo/');
  }

  function handleConcluido() {
    if (etapaConcluida) {
      setEtapaConcluida(false);
    } else {
      setEtapaConcluida(true);
    }
  }

  function handleAddFunc() {
    if (addfunc) {
      setAddFunc(false);
    } else {
      setAddFunc(true);
    }
  }

  const {
    handleSubmit,
    register,
    // control,
    watch,
    formState: { errors }
  } = useForm<PropsFormContact>({
    mode: 'all',
    resolver: zodResolver(schema)
  });

  const handleAddFuncionario = async (data: PropsFormContact) => {
    console.log(data);

    try {
      const res = await axios.post(`http://localhost:8800/add_user`, {
        data
      });
      if (res.status === 200) {
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } catch (error) {
      throw new Error(`Formulario erro - ${error}`);
    }
  };

  const handleExcluir = async (id_funcionario: string) => {
    console.log(id_funcionario);

    try {
      const res = await axios.post(`http://localhost:8800/delete_user`, {
        id_funcionario
      });
      if (res.status === 200) {
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } catch (error) {
      throw new Error(`Formulario erro - ${error}`);
    }
  };

  const watchInput = watch('status');

  const [isChecked, setIsChecked] = useState<boolean>(false);
  console.log(isChecked);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <SectionPrincipal_AddFuncionario>
        <ContainerPrincipal_AddFuncionario>
          <ContainerUserAdd>
            <FuncionarioBio_DIV>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                iure alias, officia ab quo, sequi repudiandae aliquam,
                voluptatum debitis fuga accusamus. Ad vero qui accusantium iste
                magnam inventore quod numquam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur iure alias, officia ab
                quo, sequi repudiandae aliquam, voluptatum debitis fuga
                accusamus. Ad vero qui accusantium iste magnam inventore quod
                numquam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tenetur iure alias, officia ab quo, sequi repudiandae
                aliquam, voluptatum debitis fuga accusamus. Ad vero qui
                accusantium iste magnam inventore quod numquam.
              </span>
              <ImageWithPrefix
                src="/profissional_user.png"
                width="200px"
                height="200px"
                id="1"
                alt="Imagem do profissional"
              />
            </FuncionarioBio_DIV>
            <ContainerAdd_Funcionario_DIV>
              <Add_Funcionario_DIV $addFuncionario={addfunc}>
                <h2>Funcionário(s)</h2>
                <section>
                  <AddButton onClick={handleAddFunc}>
                    {' '}
                    + Adicionar Funcionário
                  </AddButton>

                  <div>FILTROS</div>

                  <ListaFuncionario>
                    {data &&
                      data.map((item) => {
                        return (
                          <Card
                            $active={
                              item.status === '1'
                                ? true
                                : item.status === '0'
                                ? false
                                : false
                            }
                            key={item.id_funcionario}
                          >
                            <div>
                              <h3>{item.nome}</h3>
                              <CardInfo>
                                <span>{item.cpf}</span>
                                <span>
                                  {item.status === '1'
                                    ? 'Ativo'
                                    : item.status === '0'
                                    ? 'Inativo'
                                    : ''}
                                </span>
                                <span>{item.cargo}</span>
                              </CardInfo>
                            </div>
                            <EditarCard>
                              <button
                                onClick={() =>
                                  handleExcluir(item.id_funcionario)
                                }
                              >
                                Excluir
                              </button>
                            </EditarCard>
                          </Card>
                        );
                      })}
                  </ListaFuncionario>
                </section>
                <ContainerSpaceBetween>
                  <div></div>
                  <div>
                    <span>
                      A etapa está concluída?
                      <SwitchEtapa
                        $ativo={etapaConcluida}
                        onClick={handleConcluido}
                      >
                        {etapaConcluida ? 'Não' : 'Sim'}
                        <span></span>
                      </SwitchEtapa>
                    </span>
                  </div>
                </ContainerSpaceBetween>
              </Add_Funcionario_DIV>
              <ContainerForm_addFuncionario $addFuncionario={addfunc}>
                <Cabecalho_FORM>
                  <button onClick={handleAddFunc}> Voltar </button>
                  <h2>Adicionar Funcionário</h2>
                </Cabecalho_FORM>
                <form onSubmit={handleSubmit(handleAddFuncionario)}>
                  <DIV_input_ATIV_INATIVO>
                    <p>O trabalhador está ativo ou inativo ?: *</p>
                    <Switch>
                      <input
                        id="status"
                        type="checkbox"
                        {...register('status')}
                      />
                      <label htmlFor="status">
                        <span>{watchInput ? 'Ativo' : 'Inativo'}</span>
                      </label>
                      <span>{errors && errors.status?.message}</span>
                    </Switch>
                  </DIV_input_ATIV_INATIVO>
                  <DIV_FORM_NAME_SEXO>
                    <DIV_Inputs>
                      <input
                        {...register('id_funcionario')}
                        style={{ display: 'none' }}
                        type="text"
                        value={''}
                      />
                      <span>{errors && errors.id_funcionario?.message}</span>

                      <label htmlFor="nomeCompleto">
                        <p>Nome</p>

                        <input
                          id="nome"
                          {...register('nome')}
                          type="text"
                          placeholder="Nome ..."
                        />
                        <span>{errors && errors.nome?.message}</span>
                      </label>

                      <label htmlFor="sexo">
                        <p>Sexo</p>
                        <ContainerSpaceBetween>
                          <p>
                            {' '}
                            <input
                              id="sexo"
                              value="Feminino"
                              {...register('sexo')}
                              type="radio"
                            />
                            Feminino
                          </p>

                          <p>
                            <input
                              id="sexo"
                              value="Masculino"
                              {...register('sexo')}
                              type="radio"
                            />{' '}
                            Masculino
                          </p>

                          <span>{errors && errors.sexo?.message}</span>
                        </ContainerSpaceBetween>
                      </label>
                    </DIV_Inputs>
                    <DIV_Inputs>
                      <label htmlFor="cpf">
                        <p>CPF</p>

                        <input
                          id="cpf"
                          {...register('cpf')}
                          type="text"
                          placeholder="cpf"
                        />
                        <span>{errors && errors.cpf?.message}</span>
                      </label>
                      <label htmlFor="dt_nascimento">
                        <p>Data_nascimento</p>

                        <input
                          id="dt_nascimento"
                          {...register('dt_nascimento')}
                          type="date"
                        />
                        <span>{errors && errors.dt_nascimento?.message}</span>
                      </label>
                    </DIV_Inputs>

                    <DIV_Inputs>
                      <label htmlFor="rg">
                        <p>RG</p>

                        <input
                          id="rg"
                          {...register('rg')}
                          type="text"
                          placeholder="rg"
                        />
                        <span>{errors && errors.rg?.message}</span>
                      </label>

                      <label htmlFor="cargo">
                        <p>Cargo</p>

                        <input
                          id="cargo"
                          {...register('cargo')}
                          type="text"
                          placeholder="cargo"
                        />
                        <span>{errors && errors.cargo?.message}</span>
                      </label>
                    </DIV_Inputs>
                  </DIV_FORM_NAME_SEXO>

                  <DIV_FORM_NAME_SEXO>
                    <h4>Quais EPIs o trabalhador usa na atividade?</h4>
                    <label htmlFor="isChecked">
                      {' '}
                      <input
                        type="checkbox"
                        name="isChecked"
                        id="isChecked"
                        onChange={handleOnChange}
                        checked={isChecked}
                      />
                      O trabalhador não usa EPI
                    </label>

                    {!isChecked && (
                      <DIV_FORM_NAME_SEXO style={{ margin: '20px 0' }}>
                        <DIV_Inputs>
                          <label htmlFor="">
                            <p>Selecione a atividade: </p>
                            <select
                              {...register('atividade')}
                              name="atividade"
                              id="atividade"
                            >
                              <option value="">Selecione</option>
                              <option value="1">Atividade 1</option>
                              <option value="2">Atividade 2</option>
                              <option value="3">Atividade 3</option>
                              <option value="4">Atividade 4</option>
                            </select>
                          </label>
                        </DIV_Inputs>
                        <DIV_Inputs>
                          <label htmlFor="">
                            <p>Selecione o EPI: </p>
                            <select {...register('epi')} name="epi" id="epi">
                              <option value="">Selecione</option>
                              <option value="1">EPI 1</option>
                              <option value="2">EPI 2</option>
                              <option value="3">EPI 3</option>
                              <option value="4">EPI 4</option>
                            </select>
                          </label>

                          <label htmlFor="">
                            <p>Informe o número do CA: </p>

                            <input type="text" {...register('nu_ca')} />
                          </label>
                          <span> ADICIONAR </span>
                        </DIV_Inputs>
                      </DIV_FORM_NAME_SEXO>
                    )}
                  </DIV_FORM_NAME_SEXO>
                  <button type="submit">Enviar</button>
                </form>
              </ContainerForm_addFuncionario>

              <ContainerSpaceBetween>
                <div></div>
                <ButtonNext
                  $disabled={etapaConcluida}
                  disabled={etapaConcluida}
                  onClick={handleRedirect}
                >
                  Proximo passo
                </ButtonNext>
              </ContainerSpaceBetween>
            </ContainerAdd_Funcionario_DIV>
          </ContainerUserAdd>
        </ContainerPrincipal_AddFuncionario>
      </SectionPrincipal_AddFuncionario>
    </>
  );
};
