import React from 'react';

import img from '../../assets/home.svg';
import { Container } from './styles';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <Container id={id}>
      <h1>Bem Vindo!</h1>
      <img src={img} alt="Consultório da Dra Fernanda Trevilin" />
    </Container>
  );
};

export default Home;
