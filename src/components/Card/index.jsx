import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ linkId, cover, children }) {
  return (
    <Link to={`/fiche-logement/${linkId}`} className="card">
      <img src={cover} alt="" />
      <h2 className="card-title">{children}</h2>
    </Link>
  );
}

export default Card;
