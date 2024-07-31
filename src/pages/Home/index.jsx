import Banner from "../../components/Banner";
import HomeBanner from "../../assets/home-banner.png";
import Logements from "../../data/logements.json";
import "../../styles/Home.scss";
import Card from "../../components/Card";

function Home() {
  return (
    <main>
      <div className="home-banner-ctn">
        <Banner srcUrl={HomeBanner} altText="Bord de mer montagneux" />
        <span className="home-banner-text">Chez vous, partout et ailleurs</span>
      </div>
      <div className="card-gallery">
        {Logements.map((logement) => (
          <Card
            key={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
