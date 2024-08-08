import logo from "../../assets/LOGO-white.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo du site Kasa" />
      <span className="footer-text">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;
