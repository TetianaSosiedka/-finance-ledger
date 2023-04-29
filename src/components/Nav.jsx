import { useEffect } from 'react';
import { AddActiveClass } from 'js/addActiveClass';

const Nav = () => {
  useEffect(() => {
    AddActiveClass();
  });
  return (
    <>
      <nav className="nav">
        <ul className="nav-list">
          <li key="home" className="nav-item">
            <a className="nav-link" href="#header" title="Home">
              Home
            </a>
          </li>
          <li key="about" className="nav-item">
            <a className="nav-link" href="#about" title="About">
              About
            </a>
          </li>
          <li key="Cases" className="nav-item">
            <a className="nav-link" href="#cases" title="Cases">
              Cases
            </a>
          </li>
          <li key="blog" className="nav-item">
            <a className="nav-link" href="#blog" title="Blog">
              Blog
            </a>
          </li>
          <li key="contact" className="nav-item">
            <a className="nav-link" href="#contact" title="Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
