import Banner from "../../components/Banner";
import HomeBanner from "../../assets/home-banner.webp";
import Logements from "../../data/logements.json";
import "./Home.scss";
import Card from "../../components/Card";

function Home() {
  return (
    <main className="home">
      <Banner srcUrl={HomeBanner} altText="Bord de mer montagneux">
        Chez vous, partout et ailleurs
      </Banner>
      <div className="card-gallery">
        {Logements.map((logement) => (
          <Card key={logement.id} linkId={logement.id} cover={logement.cover}>
            {logement.title}
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Home;
