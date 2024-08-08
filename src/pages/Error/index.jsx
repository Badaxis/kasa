import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <main className="error-ctn">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link className="error-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
