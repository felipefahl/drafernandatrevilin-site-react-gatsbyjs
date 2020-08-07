import styled, { css } from 'styled-components';

import logo from '../../assets/logo-agua.svg';

interface ContainerProps {
  scrolled: boolean;
}

interface NavMenuProps {
  menuOpened: boolean;
}

interface ButtonContainerProps {
  menuOpened: boolean;
  scrolled: boolean;
}

export const Logo = styled.img.attrs({
  src: logo,
})``;

export const Container = styled.header<ContainerProps>`
  transition: all 0.4s ease;

  width: 100%;
  height: 130px;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 10%;
  padding-right: 10%;

  background: var(--primary);

  ${Logo} {
    max-width: 300px;
    padding-top: 3px;
    transition: all 0.4s ease;
  }

  ${props =>
    props.scrolled &&
    css`
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.8);
      height: 100px;
      ${Logo} {
        max-width: 250px;
        padding-top: 3px;
      }
    `}

  @media (max-width: 1000px) {
    height: 80px;
    justify-content: center;
    ${Logo} {
      max-width: 200px;
    }
  }
`;

export const NavMenu = styled.nav<NavMenuProps>`
  display: flex;

  .btn-menu {
    height: 40px;
    width: 40px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 10px;
    top: 20px;
    border-radius: 5px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.5;
    }

    svg {
      color: var(--primary);
    }
  }

  @media (min-width: 1000px) {
    .btn-menu {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;

  @media (min-width: 1000px) {
    button {
      + button {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1000px) {
    width: 0;
    overflow-x: hidden;
    transition: 0.5s;
    background: var(--primary);
    position: fixed;
    padding-top: 10px;
    top: 70px;
    left: 0;

    border-radius: 5px;

    flex-direction: column;
    align-items: center;

    button {
      margin: 10px;
      padding: 10px;
      width: 150px;
    }

    ${props =>
      props.menuOpened &&
      css`
        width: 200px;
      `}

    ${props =>
      props.scrolled &&
      css`
        box-shadow: 8px 8px 6px -6px rgba(0, 0, 0, 0.8);
      `}
  }
`;

export const HeaderBottom = styled.div`
  padding: 60px;
  @media (max-width: 1000px) {
    padding: 40px;
  }
`;
