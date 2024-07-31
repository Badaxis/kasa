import { Link } from "react-router-dom";
import "../../styles/Card.scss";

function Card({ cover, title }) {
  return (
    <Link to={"/"} className="card">
      <img src={cover} alt={title} />
      <span className="card-title">{title}</span>
    </Link>
  );
}

export default Card;
