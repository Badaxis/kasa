import { NavLink } from "react-router-dom";
import logo from "../../assets/LOGO-red.png";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img className="logo-header" src={logo} alt="Logo du site Kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
