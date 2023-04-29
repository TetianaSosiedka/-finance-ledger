import icons from 'images/icons.svg';

const TeamMember = ({
  imgJpg,
  imgWebp,
  imgJpg2x,
  imgWebp2x,
  name,
  position,
}) => {
  return (
    <figure className="member">
      <div className="member_image-wrap">
        <picture className="member_image">
          <source srcSet={`${imgJpg} 1x, ${imgJpg2x} 2x`} type="image/webp" />
          <source srcSet={`${imgWebp} 1x, ${imgWebp2x} 2x`} type="image/jpeg" />
          <img src={imgJpg} alt="people" />
        </picture>
        <div className="member_icons-wrap">
          <svg className="member_icons">
            <use href={icons + '#facebook'}></use>
          </svg>
          <svg className="member_icons">
            <use href={icons + '#twitter'}></use>
          </svg>
          <svg className="member_icons">
            <use href={icons + '#youtube'}></use>
          </svg>
          <svg className="member_icons">
            <use href={icons + '#linkedin'}></use>
          </svg>
        </div>
      </div>
      <figcaption className="member_caption">
        {name} <em className="member_position">{position}</em>
      </figcaption>
    </figure>
  );
};

export default TeamMember;
