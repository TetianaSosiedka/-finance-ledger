import Container from './Container';
import ImageGallery from './ImagesGallery';

const Cases = () => {
  return (
    <section id="cases" className="section cases section--full-width">
      <Container>
        <div className="section_wrap">
          <h3 className="section_description">This is what we do</h3>
          <h2 className="section_title">Business Cases</h2>
          <p className="section_information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </p>
        </div>
        <ImageGallery />
      </Container>
    </section>
  );
};

export default Cases;
