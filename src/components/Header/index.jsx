import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO-red.png";
import "./Header.scss";

function Header() {
  const page = useLocation().pathname;

  return (
    <header>
      <img className="logo-header" src={logo} alt="Logo du site Kasa" />
      <nav>
        <Link to="/" className={page === "/" ? "header-nav-active" : ""}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={page === "/a-propos" ? "header-nav-active" : ""}
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
