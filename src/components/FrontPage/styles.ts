import styled from 'styled-components';

import background from '../../assets/background.svg';

export const Container = styled.div`
  min-height: 100vh;
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
