import Container from './Container';
import ButtonLink from './ButtonLink';

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <h2 className="hero_title">The Sky Is The Limit</h2>
        <div className="hero_details">
          We provide world class financial assistance
        </div>
        <ButtonLink
          className="button--accent-color"
          href=""
          title="Read More"
          iconId="angle-right"
        >
          Read More
        </ButtonLink>
      </Container>
    </section>
  );
};

export default Hero;
