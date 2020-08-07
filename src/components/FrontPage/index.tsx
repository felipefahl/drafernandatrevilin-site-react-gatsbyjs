import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Header/index';
import GlobalStyle from '../../styles/global';
import { Container, Main, DivEmpty } from './styles';
import Footer from '../Footer';
import Home from '../Home';
import About from '../About';
import Processing from '../Processing';

const FrontPage: React.FC = () => {
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
        <title>Dra Fernanda Trevilin</title>
        <link rel="canonical" href="http://drafernandatrevilin.odo" />
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
        <Home id={headerProps.contactContentElementId} />
      </Main>
      <Footer />
    </Container>
  );
};

export default FrontPage;
