import React from 'react';

import img from '../../assets/perfilDraFernandaTrevilin.svg';
import { Container } from './styles';

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
      <p>
        Sempre me perguntam porque escolhi a Odontologia e nunca soube dizer
        exatamente o que me fez escolhe-la. Mas sempre fui encantada por essa
        profissão linda e então comecei a fazer minha faculdade no ano de 2012
        na FHO-Uniararas. Foram quatro anos de aprendizado, algumas noites em
        claro estudando, longe da minha família mas com novos amigos onde tive
        momentos que ficarão para sempre guardados em mim. Me formei em 2015
        Cirurgiã-dentista, inscrita no CRO-SP desde 2015 sob o n.º 115813,
        voltei para minha cidade natal Piracicaba-SP e logo em seguida comecei a
        atuar na minha profissão prestando serviço para algumas clínicas na
        cidade
      </p>
      <p>
        Hoje tenho meu consultório onde posso atuar da maneira que mais amo, dar
        aos meus pacientes o atendimento humanizado, onde posso demonstrar todo
        meu carinho e respeito por ele. O amor que sinto pela minha profissão só
        cresce cada vez mais, a vontade de cada dia me aperfeiçoar para dar
        sempre o melhor para aqueles que me procuram.
      </p>
    </Container>
  );
};

export default About;
