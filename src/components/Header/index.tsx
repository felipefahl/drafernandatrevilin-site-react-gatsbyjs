import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'gatsby';
import { FiMenu } from 'react-icons/fi';
import { useOuterClick } from 'react-outer-click';
import {
  Container,
  Logo,
  NavMenu,
  ButtonContainer,
  HeaderBottom,
} from './styles';
import Button from '../Button';

interface HeaderProps {
  homeContentElementId: string;
  aboutContentElementId: string;
  procsContentElementId: string;
  contactContentElementId: string;
}

const Header: React.FC<HeaderProps> = ({
  homeContentElementId,
  aboutContentElementId,
  procsContentElementId,
  contactContentElementId,
}) => {
  const headerHeight = 150;

  const menuButtonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    function handleScroll(): void {
      const { scrollY } = window;

      if (scrollY > 50) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else if (scrolled) {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleButtonClick = (contendId: string): void => {
    const element = document.getElementById(`${contendId}`);

    if (!element) {
      return;
    }

    const scrolledY = element.offsetTop;

    window.scrollTo({
      top: scrolledY - headerHeight,
      behavior: 'smooth',
    });
  };

  useOuterClick(menuButtonRef, () => {
    setMenuOpened(false);
  });

  const handleMenu = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  return (
    <>
      <Container scrolled={scrolled}>
        <Link to="/">
          <Logo />
        </Link>
        <NavMenu menuOpened={menuOpened}>
          <button
            ref={menuButtonRef}
            type="button"
            className="btn-menu"
            onClick={handleMenu}
          >
            <FiMenu size={20} />
          </button>
          <ButtonContainer scrolled={scrolled} menuOpened={menuOpened}>
            <Button
              onClick={() => handleButtonClick(homeContentElementId)}
              name="Home"
            >
              Home
            </Button>
            <Button
              onClick={() => handleButtonClick(aboutContentElementId)}
              name="About"
            >
              Sobre mim
            </Button>
            <Button
              onClick={() => handleButtonClick(procsContentElementId)}
              name="Procs"
            >
              Procedimentos
            </Button>
            <Button
              onClick={() => handleButtonClick(contactContentElementId)}
              name="Contact"
            >
              Contato
            </Button>
          </ButtonContainer>
        </NavMenu>
      </Container>
      <HeaderBottom />
    </>
  );
};

export default Header;
