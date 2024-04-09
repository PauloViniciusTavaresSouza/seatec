import styled from 'styled-components';

export const SectionPrincipal_Breve = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #fff;
  background-image: url('/Elementos-de-fundo.svg');
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
`;

export const ContainerPrincipal_Breve = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 50px;
  margin: 20px;
  background-color: #4fa1c1;

  width: 100%;
  border-radius: 50px;

  h1 {
    color: #fff;
    font-size: 30px;
    font-weight: 500;
  }
`;
