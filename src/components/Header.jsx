import Container from './Container';
import Logo from './Logo';
import Nav from './Nav';
import Hero from './Hero';

const Header = () => {
  return (
    <div id="header" className="header_wrap">
      <header className="header header_animated ">
        <Container>
          <Logo></Logo>
          <Nav></Nav>
        </Container>
      </header>
      <Hero />
    </div>
  );
};

export default Header;
