import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { FaWhatsapp } from 'react-icons/fa';
import Header from '../Header/index';
import GlobalStyle from '../../styles/global';
import { Container, Main, DivEmpty, DivWhatsapp } from './styles';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import Processing from '../Processing';
import Contact from '../Contact';

const FrontPage: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `,
  );

  const headerProps = {
    homeContentElementId: 'homeDiv',
    aboutContentElementId: 'aboutDiv',
    procsContentElementId: 'procsDiv',
    contactContentElementId: 'contactDiv',
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <GlobalStyle />
      <Header
        homeContentElementId={headerProps.homeContentElementId}
        aboutContentElementId={headerProps.aboutContentElementId}
        procsContentElementId={headerProps.procsContentElementId}
        contactContentElementId={headerProps.contactContentElementId}
      />
      <Main>
        <Home id={headerProps.homeContentElementId} />
        <DivEmpty />
        <About id={headerProps.aboutContentElementId} />
        <DivEmpty />
        <Processing id={headerProps.procsContentElementId} />
        <DivEmpty />
        <Contact id={headerProps.contactContentElementId} />
      </Main>
      {/* <DivWhatsapp
        href="https://wa.me/5519988041122?text=Ol%C3%A1%2C%0AGostaria%20de%20mais%20informações."
        rel="noreferrer"
        target="_blank"
      >
        <FaWhatsapp size={40} />
        <div>
          <p>Olá.. Fale comigo por aqui</p>
        </div>
      </DivWhatsapp> */}
      <Footer />
    </Container>
  );
};
export default FrontPage;
