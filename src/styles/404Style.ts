import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  padding: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--grayLight);

  .Logo {
    display: flex;
    img {
      width: 100%;
    }
  }

  p {
    padding: 10px;
    text-align: center;
    font-size: 30px;
    color: var(--secundary);
  }

  a {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    border-radius: 10px;

    background: var(--primary);
    color: var(--white);

    &:hover {
      opacity: 0.8;
    }

    span {
      padding: 5px;
    }
  }
`;
