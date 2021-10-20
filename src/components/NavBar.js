import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCog } from 'react-icons/fa';

const NavBar = () => (
  <header className="header container-header">
    <nav className="header__nav">
      <NavLink to="/" className="header__nav-a header__nav-a--back">
        <FaArrowLeft />
      </NavLink>
      <NavLink to="/" className="header__nav-a header__nav-a--heading">
        COVID TRACKER
      </NavLink>
      <button className="header__nav-btn" type="button">
        <FaCog />
      </button>
    </nav>
  </header>
);

export default NavBar;
