import Container from './Container';

import { casesImages } from 'constants/casesImges';

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
        <ul className="section_list">
          {casesImages.map(
            ({ casesJpg, casesJpg2x, casesWebp, casesWebp2x }) => (
              <li key={casesJpg} className="section_item">
                <picture className="mcases_image">
                  <source
                    srcSet={`${casesJpg} 1x, ${casesJpg2x} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${casesWebp} 1x, ${casesWebp2x} 2x`}
                    type="image/jpeg"
                  />
                  <img src={casesJpg} alt="case" />
                </picture>
              </li>
            )
          )}
        </ul>
      </Container>
    </section>
  );
};

export default Cases;
