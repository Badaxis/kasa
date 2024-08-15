import StarActive from "../../assets/star-active.png";
import StarInactive from "../../assets/star-inactive.png";
import "./Rating.scss";

function Rating({ rate }) {
  const rating = () => {
    const redStars = [];
    const greyStars = [];
    for (let i = 0; i < rate; i++) {
      redStars.push(<img key={i} src={StarActive} alt="Star" />);
    }
    for (let i = 0; i < 5 - rate; i++) {
      greyStars.push(<img key={5 - i} src={StarInactive} alt="No star" />);
    }
    const stars = [...redStars, ...greyStars];
    return stars;
  };
  return <div className="rating">{rating()}</div>;
}

export default Rating;
