import { Navigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Logements from "../../data/logements.json";
import Rating from "../../components/Rating";
import "./Housing.scss";

function Housing() {
  const housingId = useParams();
  const [currentHousing] = Logements.filter(
    (logement) => logement.id === housingId.id,
  );
  if (currentHousing === undefined) {
    return <Navigate to="/*" />;
  }

  const hostNames = currentHousing.host.name.split(" ");

  return (
    <main>
      <Slideshow slides={currentHousing.pictures} />
      <div className="housing-info">
        <div className="info-left">
          <div>
            <h1 className="housing-title">{currentHousing.title}</h1>
            <h2 className="housing-location">{currentHousing.location}</h2>
          </div>
          <div className="tags">
            {currentHousing.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="info-right">
          <figure className="host">
            <figcaption className="host-name">
              {hostNames[0]}
              <br />
              {hostNames[1]}
            </figcaption>
            <img
              className="host-picture"
              src={currentHousing.host.picture}
              alt="Avatar de l'hôte"
            />
          </figure>
          <Rating rate={currentHousing.rating} />
        </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description">{currentHousing.description}</Collapse>
        <Collapse title="Équipements">
          {
            <ul className="equipements">
              {currentHousing.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        </Collapse>
      </div>
    </main>
  );
}

export default Housing;
