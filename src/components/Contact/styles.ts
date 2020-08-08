import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--grayLight);
  text-align: center;
  border-radius: 5px;
  padding: 10px;

  h1 {
    color: var(--primary);
    font-size: 40px;
    padding: 10px;
  }

  h3 {
    margin-top: 10px;
    color: var(--primary);
    font-size: 25px;
    padding: 10px;
  }

  p {
    margin-bottom: 5px;
    font-size: 18px;
    color: var(--secundary);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--secundary);

    &:hover {
      opacity: 0.8;
    }

    p {
      margin: 0;
      padding: 5px;
    }

    svg {
      min-height: 30px;
      min-width: 30px;
    }
  }

  .WhatsApp {
    color: green;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin-left: 5px;
    margin-right: 5px;
  }
`;
