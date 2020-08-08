import styled from 'styled-components';

import background from '../../assets/background.svg';

export const Container = styled.div`
  width: 100%;
  background: url(${background});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.main`
  min-height: 100vh;
  flex: 1;
  padding: 5% 10%;
`;

export const DivEmpty = styled.div`
  opacity: 0;
  height: 100px;
  width: 100%;
  @media (max-width: 800px) {
    height: 20px;
  }
`;

export const DivWhatsapp = styled.a`
  position: fixed;
  right: 15px;
  bottom: 15px;
  height: 45px;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.8);

  background: var(--white);
  border-radius: 5px;

  svg {
    color: green;
  }

  div {
    text-align: center;

    overflow-x: hidden;
    transition: 0.5s;
    width: 0;

    p {
      color: var(--secundary);
      font-weight: bold;
      width: 130px;
    }
  }

  &:hover {
    div {
      width: 150px;
    }
  }
`;
