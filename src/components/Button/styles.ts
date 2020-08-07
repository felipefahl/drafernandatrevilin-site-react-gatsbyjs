import styled from 'styled-components';

export const Container = styled.button`
  color: var(--white);
  background: var(--primary);
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: var(--white);
    color: var(--secundary);
  }
`;
