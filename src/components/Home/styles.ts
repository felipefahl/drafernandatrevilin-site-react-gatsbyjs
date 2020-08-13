import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--grayLight);
  text-align: center;
  border-radius: 5px;

  h1 {
    color: var(--primary);
    font-size: 40px;
    padding: 10px;
  }

  img {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
    margin-bottom: 5%;
    margin-top: 5px;
  }
`;
