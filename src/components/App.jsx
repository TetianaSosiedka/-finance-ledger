import { useEffect } from 'react';
import { animOnScroll } from 'js/animOnScroll';

import Header from './Header';
import About from './About';
import Cases from './Cases';
import Blog from './Blog';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    animOnScroll();
  }, []);

  return (
    <>
      <Header />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
