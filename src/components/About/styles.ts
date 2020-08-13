import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--grayLight);
  text-align: center;
  border-radius: 5px;
  padding: 10px;

  .Title {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h1 {
    color: var(--primary);
    font-size: 40px;
    padding: 10px;
  }

  img {
    max-width: 200px;
  }

  p {
    padding: 20px 60px;
    text-indent: 30px;
    text-align: justify;
    color: var(--secundary);
    line-height: 30px;
    font-size: 18px;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 30px;
    }
    img {
      max-width: 120px;
    }
    p {
      padding: 20px 40px;
    }
  }

  @media (max-width: 400px) {
    img {
      max-width: 100px;
    }
    p {
      padding: 10px 20px;
    }
  }
`;
