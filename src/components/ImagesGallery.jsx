import { useState } from 'react';

import { casesImages } from 'constants/casesImges';
import prev from 'images/gallery/prev.png';
import next from 'images/gallery/next.png';
import close from 'images/gallery/close.png';

const ImageGallery = () => {
  const countImages = casesImages.length;
  const [data, setData] = useState({ image: '', i: 0 });
  const viewImage = (image, i) => {
    setData({ image, i });
  };

  const imgAction = action => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ image: casesImages[i + 1], i: i + 1 });
    }
    if (action === 'prev-img') {
      setData({ image: casesImages[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ image: '', i: 0 });
    }
  };

  return (
    <div className="gallery">
      {data.image && (
        <div className="backdrop">
          <div className="gallery_modal-content">
            {data.i !== 0 && (
              <button
                className="gallery_arrow-prev"
                type="button"
                onClick={() => imgAction('prev-img')}
              >
                <img src={prev} alt="previous" />
              </button>
            )}
            {data.i < countImages - 1 && (
              <button
                className="gallery_arrow-next"
                type="button"
                onClick={() => imgAction('next-img')}
              >
                <img src={next} alt="next" />
              </button>
            )}

            <button
              className="gallery_arrow-close"
              type="button"
              onClick={() => imgAction()}
            >
              <img src={close} alt="close" />
            </button>
            <picture className="gallery_image">
              <source
                srcSet={`${data.image.casesJpg} 1x, ${data.image.casesJpg2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${data.image.casesWebp} 1x, ${data.image.casesWebp2x} 2x`}
                type="image/jpeg"
              />
              <img src={data.image.casesJpg} alt="case" />
            </picture>
          </div>
        </div>
      )}

      <ul className="section_list">
        {casesImages.map((image, i) => (
          <li key={i} className="section_item">
            <picture
              className="cases_image"
              onClick={() => viewImage(image, i)}
            >
              <source
                srcSet={`${image.casesJpg} 1x, ${image.casesJpg2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${image.casesWebp} 1x, ${image.casesWebp2x} 2x`}
                type="image/jpeg"
              />
              <img src={image.casesJpg} alt="case" />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
