import { Navigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";
import Tag from "../../components/Tag";
import Logements from "../../data/logements.json";
import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "../../styles/Housing.scss";

function Housing() {
  const housingId = useParams();
  const [currentHousing] = Logements.filter(
    (logement) => logement.id === housingId.id,
  );
  if (currentHousing === undefined) {
    return <Navigate to="/*" />;
  }

  const hostNames = currentHousing.host.name.split(" ");
  const rating = () => {
    const redStars = [];
    const greyStars = [];
    for (let i = 0; i < currentHousing.rating; i++) {
      redStars.push(<img key={i} src={StarActive} alt="Star" />);
    }
    for (let i = 0; i < 5 - currentHousing.rating; i++) {
      greyStars.push(<img key={5 - i} src={StarInactive} alt="No star" />);
    }
    const stars = [...redStars, ...greyStars];
    return stars;
  };

  return (
    <main>
      <Slideshow slides={currentHousing.pictures} />
      <div className="housing-info">
        <div className="info-ctn">
          <div>
            <h1 className="housing-title">{currentHousing.title}</h1>
            <h2 className="housing-location">{currentHousing.location}</h2>
          </div>
          <div className="tags">
            {currentHousing.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
          </div>
        </div>
        <div className="info-ctn">
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
          <div className="rating">{rating()}</div>
        </div>
      </div>
      <div className="housing-collapses">
        <Collapse title="Description" content={currentHousing.description} />
        <Collapse
          title="Équipements"
          content={
            <ul className="equipements">
              {currentHousing.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
}

export default Housing;
