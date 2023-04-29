import icons from 'images/icons.svg';

const Header = () => {
  return (
    <div className="logo">
      <svg className="logo_svg">
        <use href={icons + '#logo'}></use>
      </svg>
      <h1 className="logo_header">
        <span className="logo-header-accent">Finance</span> Ledger
      </h1>
    </div>
  );
};

export default Header;
