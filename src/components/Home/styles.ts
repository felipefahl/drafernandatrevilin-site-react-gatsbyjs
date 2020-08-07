import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--grayLight);
  text-align: center;
  border-radius: 5px;

  h1 {
    color: var(--primary);
    font-size: 40px;
    padding: 10px;
  }

  img {
    width: 100%;
  }
`;
