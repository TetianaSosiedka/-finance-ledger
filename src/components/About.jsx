import Container from './Container';
import ButtonLink from './ButtonLink';
import people from 'images/about/people.jpg';
import peopleWebP from 'images/about/people.webp';
import people2x from 'images/about/people.jpg';
import peopleWebP2x from 'images/about/people@2x.webp';

const About = () => {
  return (
    <section id="about" className="section section_about section--left-image">
      <Container>
        <picture className="section_image">
          <source
            srcSet={`${peopleWebP} 1x, ${peopleWebP2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${people} 1x, ${people2x} 2x`} type="image/jpeg" />
          <img src={people} alt="people" />
        </picture>
        <div className="section_wrap">
          <h3 className="section_description">What you are looking for</h3>
          <h2 className="section_title">We provide bespoke solutions</h2>
          <p className="section_information">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <ButtonLink
            className="button--transparent-color"
            href=""
            title="Read More"
          >
            Read More
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default About;
