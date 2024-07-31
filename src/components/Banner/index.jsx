import "../../styles/Banner.scss";

function Banner({ srcUrl, altText }) {
  return <img className="banner-img" src={srcUrl} alt={altText} />;
}

export default Banner;
