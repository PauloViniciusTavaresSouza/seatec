import styled from 'styled-components';

export const SectionPrincipal_AddFuncionario = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
`;

export const ContainerPrincipal_AddFuncionario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContainerUserAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  margin: 20px;
  gap: 20px;

  @media (max-width: 1085px) {
    flex-direction: column;
  }
`;

export const FuncionarioBio_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;

  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  width: 40%;

  @media (max-width: 1085px) {
    width: 100%;
  }

  span {
    font-size: 16px;
    color: #959595;
  }
`;

export const ContainerAdd_Funcionario_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  width: 100%;

  @media (max-width: 1085px) {
    max-width: 100%;
  }
`;

export const Add_Funcionario_DIV = styled.div<{
  $addFuncionario: boolean;
}>`
  display: ${(props) => (props.$addFuncionario ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  max-height: 650px;

  overflow: auto;

  padding: 0 0 20px 0;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 1085px) {
    max-width: 100%;
  }

  h2 {
    font-size: 28px;
    color: #fff;
    width: 100%;
    background-color: #649fbf;
    text-align: left;
    padding: 20px;
    border-radius: 10px 10px 0 0;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
`;

export const AddButton = styled.button`
  border: 1px solid #649fbf;
  border-radius: 5px;
  width: 100%;
  padding: 25px;
  margin: 10px;
  color: #649fbf;
  background-color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #e0ecf2;
  }
`;

export const ListaFuncionario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 10px 0;
`;

export const Card = styled.div<{
  $active: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;

  padding: 0 0 0 20px;
  border-radius: 10px;

  background-color: ${(props) => (props.$active ? '#E0ECF2' : '#F2F2F2')};
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 10px 0;

  span {
    background-color: #649fbf;
    border-radius: 50px;
    padding: 5px 20px;
  }
`;

export const EditarCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #649fbf;
  width: 50px;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
  }
`;

export const ContainerSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;

  p {
    font-size: 12px;
  }
`;

export const SwitchEtapa = styled.button<{
  $ativo?: boolean;
}>`
  border: none;
  padding: 0px 20px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;

  span {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    &::after {
      content: '';
      display: ${(props) => (props.$ativo ? 'inline-block' : 'none')};
      width: 17px;
      height: 17px;
      border-radius: 50%;

      position: relative;
      top: 1px;
      left: -45px;
      border-radius: 50%;
      background-color: #649fbf;
      transition: 1s;
    }

    &::before {
      content: '';
      display: ${(props) => (props.$ativo ? 'none' : 'inline-block')};
      width: 17px;
      height: 17px;
      border-radius: 50%;

      position: relative;
      top: 1px;
      left: 25px;
      border-radius: 50%;
      background-color: #649fbf;
      transition: 1s;
    }
  }
`;

export const ButtonNext = styled.button<{
  $disabled: boolean;
}>`
  background-color: ${(props) => (props.$disabled ? '#959595' : '#649fbf')};
  padding: 10px 35px;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
`;

export const ContainerForm_addFuncionario = styled.div<{
  $addFuncionario: boolean;
}>`
  display: ${(props) => (props.$addFuncionario ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding: 0 0 20px 0;

  border-radius: 10px;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px;
  }

  /* @media() {
  } */
`;

export const Cabecalho_FORM = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: #649fbf;
  padding: 20px;

  h2 {
    font-size: 28px;
    color: #fff;
  }
`;

export const DIV_input_ATIV_INATIVO = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #649fbf;
  box-shadow: 2px 2px 2px #ccc;
  padding: 10px;

  width: 100%;
`;

// =========teste+=====

export const Switch = styled.div`
  display: flex;
  align-items: center;
  background-color: #dbdbdb;
  border-radius: 5px;
  width: 80px;
  height: 15px;

  input {
    position: absolute;

    &::after {
      content: '';
      display: block;
      width: 17px;
      height: 17px;
      border-radius: 50%;

      position: absolute;
      top: -2px;
      left: -2px;
      border-radius: 50%;
      background-color: #649fbf;
    }

    &:checked {
      margin-left: 70px;
      transition: 1s;
    }
  }

  label {
    display: flex;
    align-items: center;
    padding: 2px;
    margin-left: 22px;

    span {
      font-size: 12px;
    }
    /* &::after {
      content: '';
      display: block;
      width: 25px;
      height: 25px;
      background-color: red;
    } */
  }
`;

export const DIV_FORM_NAME_SEXO = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  border: 1px solid #649fbf;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 2px #ccc;

  h4 {
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    text-align: start;
    margin-bottom: 25px;
  }

  input {
    margin-right: 10px;
  }
`;

export const DIV_Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin: 10px 0;

  label {
    width: 100%;

    select {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #649fbf;
      border-radius: 10px;
    }

    input[type='text'] {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #649fbf;
      border-radius: 10px;
    }
    input[type='radio'] {
      padding: 10px;
      margin: 5px 10px 0px 15px;
    }
    input[type='date'] {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #649fbf;
      border-radius: 10px;
    }
  }
`;
