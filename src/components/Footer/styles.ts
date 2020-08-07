import styled from 'styled-components';

import logo from '../../assets/logo-cinza.svg';

export const Logo = styled.img.attrs({
  src: logo,
})``;

export const FooterBase = styled.footer`
  background: var(--gray);
  border-top: 2px solid var(--primary);
  padding: 10px;
  color: var(--white);
  text-align: center;

  ${Logo} {
    max-width: 150px;
  }

  @media (max-width: 800px) {
    ${Logo} {
      max-width: 100px;
    }
  }
`;
