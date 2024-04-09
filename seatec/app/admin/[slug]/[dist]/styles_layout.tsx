import styled from 'styled-components';

export const Header_Proximo_passo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15vh;

  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 10px 10px #ccc;
  margin: 0 0 20px 0;
`;

export const ContainerChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Button_Proximo_passo = styled.button<{
  $proxima_etapa: boolean;
}>`
  border: none;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  background-color: ${(props) => (props.$proxima_etapa ? '#ccc' : '#649fbf')};
`;
