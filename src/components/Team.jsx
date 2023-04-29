import Container from './Container';
import TeamMember from './TeamMember';

import { members } from 'constants/teamMembers';

const Team = () => {
  return (
    <section className="section section_team section--full-width">
      <Container>
        <div className="section_wrap">
          <h3 className="section_description">Who we are</h3>
          <h2 className="section_title">Our Professional Team</h2>
          <p className="section_information">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente
          </p>
        </div>
        <ul className="section_list">
          {members.map(member => (
            <li className="section_item" key={member.name}>
              <TeamMember
                imgJpg={member.personJpg}
                imgWebp={member.personWebp}
                imgJpg2x={member.personJpg2x}
                imgWebp2x={member.personWebp2x}
                name={member.name}
                position={member.position}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Team;
