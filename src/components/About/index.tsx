import React from 'react';

import img from '../../assets/perfilDraFernandaTrevilin.svg';
import { Container } from './styles';
import about from '../../data/About';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <Container id={id}>
      <div className="Title">
        <h1>Dra Fernanda Trevilin</h1>
        <img src={img} alt="Dra Fernanda Trevilin" />
      </div>
      {about.map(item => (
        <p key={item.id}>{item.description}</p>
      ))}
    </Container>
  );
};

export default About;
