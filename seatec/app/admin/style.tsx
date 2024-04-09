import styled from 'styled-components';

export const SectionPrincipal_Layout = styled.section`
  /* margin-top: 10vh; */
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const ContainerMenu_Layout = styled.div<{
  $active: boolean;
}>`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => {
    switch (true) {
      case props.$active:
        return '80px';
      case !props.$active:
        return '300px';
    }
  }};
  width: ${(props) => {
    switch (true) {
      case props.$active:
        return '80px';
      case !props.$active:
        return '300px';
    }
  }};
  min-height: 70vh;

  background-color: #4fa1c1;
  border-top-right-radius: 35px;
  padding: 20px;
  transition: 1s;

  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;

    color: #fff;
    font-weight: 500;

    list-style: none;
    margin: ${(props) => (props.$active ? '25px 5px' : '4px 0')};
    padding: ${(props) => (props.$active ? '10px' : '25px 20px')};
    background-color: ${(props) => (props.$active ? 'trasparent' : '#3C4042')};
    border-radius: 2px;

    &:hover {
      background-color: ${(props) =>
        props.$active ? 'trasparent' : '#f28d13'};
    }

    &:hover svg path {
      stroke: #1f2235;
    }

    &:hover {
      color: #1f2235;
    }
  }
  & li {
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ButtonClose = styled.button<{
  $active: boolean;
}>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  position: relative;
  left: ${(props) => {
    switch (true) {
      case props.$active:
        return '40px';
      case !props.$active:
        return '260px';
    }
  }};
  cursor: pointer;
  box-shadow: 0 0 5px 0px #b9b9b9;

  transition: 1s;

  svg {
    rotate: ${(props) => (props.$active ? '0deg' : '180deg')};
    transition: 1s;
  }

  &:hover svg {
    rotate: 180deg;
    transition: 1s;
  }
  &:hover svg path {
    stroke: #f28d13;
  }
`;

export const SectionPrincipal_Admin_Layout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 25px;

  background-color: #f2f2f2;
`;

export const SectionMenuDrop_Mobile = styled.section<{
  $active: boolean;
}>`
  display: ${(props) => (props.$active ? 'block' : 'none')};
  position: fixed;
  margin: 20px;
`;
