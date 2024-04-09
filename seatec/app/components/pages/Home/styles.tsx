import styled from 'styled-components';

export const SectionPrincipal_HOME = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;

  width: 100vw;
  height: 100vh;

  img {
    border-radius: 20px;
  }
`;
export const DIV_spaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 25px;

  button {
    border: none;

    a {
      padding: 10px 40px;
      border-radius: 5px;
      box-shadow: 2px 2px 2px #01739e;
      cursor: pointer;
      background-color: #f0f0f0;

      color: #01739e;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        padding: 9px 39px;
        margin: 1px;
      }
    }
  }
`;
