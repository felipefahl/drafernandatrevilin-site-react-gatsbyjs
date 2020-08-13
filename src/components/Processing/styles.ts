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

  @media (max-width: 800px) {
    h1 {
      font-size: 35px;
    }
  }
`;

export const ProcessingList = styled.ul`
  max-width: 1000px;
  margin: 10px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  list-style: none;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    max-width: 400px;
    grid-column: span 2;
    background: var(--secundary);
    color: var(--white);
    padding: 24px;
    border-radius: 8px;

    h3 {
      font-size: 25px;
    }

    h3::after {
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background: var(--white);
    }

    p {
      padding: 10px;
    }

    @media (min-width: 800px) {
      /* Dealing with single orphan */
      &:last-child:nth-child(3n - 1) {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }
`;
