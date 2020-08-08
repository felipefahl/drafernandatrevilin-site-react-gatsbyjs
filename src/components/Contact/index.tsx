import React from 'react';
import { FiFacebook, FiInstagram, FiMapPin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { Container, SocialMedia } from './styles';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <Container id={id}>
      <h1>Onde me encontrar</h1>
      <div>
        <p>Agende uma consulta pelo Whatsapp clicando abaixo</p>
        <a
          className="WhatsApp"
          href="https://wa.me/5519988041122?text=Ol%C3%A1%2C%0AGostaria%20de%20agendar%20uma%20consulta."
          rel="noreferrer"
          target="_blank"
        >
          <FaWhatsapp size={40} />
          <p>(19) 98804-1122</p>
        </a>
        <h3>Você também me encontra aqui</h3>
        <SocialMedia>
          <a href="mailto:drafernandatrevilin@gmail.com">
            <FiMail size={30} />
          </a>
          <a
            href="https://www.instagram.com/drafernandatrevilin/"
            rel="noreferrer"
            target="_blank"
          >
            <FiInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/drafernandatrevilin/"
            rel="noreferrer"
            target="_blank"
          >
            <FiFacebook size={30} />
          </a>
        </SocialMedia>

        <h3>Horário de atendimento</h3>
        <p>Segunda a Sexta das 08:00 às 18:00</p>

        <h3>Endereço</h3>
        <a
          href="https://goo.gl/maps/bfNFmGkfkqo8pgQb6"
          rel="noreferrer"
          target="_blank"
        >
          <FiMapPin size={30} />
          <p>
            Rua Marechal Deodoro 1511, Bairro Alto Piracicaba-SP CEP 13416-580
          </p>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
