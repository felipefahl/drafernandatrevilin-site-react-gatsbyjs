import React from 'react';
import { Link } from 'gatsby';
import { FiHome } from 'react-icons/fi';

import GlobalStyle from '../styles/global';
import logo from '../assets/logo.svg';
import { Container } from '../styles/404Style';

const Page404: React.FC = () => {
  return (
    <Container>
      <GlobalStyle />

      <div className="Logo">
        <img src={logo} alt="Dra Fernanda Trevilin" />
      </div>
      <p>Parece que você tentou acessar uma página que não existe. ☹</p>
      <Link to="/">
        <FiHome size={20} /> <span>Voltar a página inicial </span>
      </Link>
    </Container>
  );
};

export default Page404;
