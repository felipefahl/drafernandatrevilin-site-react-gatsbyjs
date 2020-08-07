import React from 'react';
import { Link } from 'gatsby';
import { FooterBase, Logo } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <Link to="/">
        <Logo />
      </Link>
    </FooterBase>
  );
};

export default Footer;
