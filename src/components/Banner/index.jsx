import "./Banner.scss";

function Banner({ srcUrl, altText, children }) {
  return (
    <div className="banner-ctn">
      <img className="banner-img" src={srcUrl} alt={altText} />
      <h1 className="banner-text">{children}</h1>
    </div>
  );
}

export default Banner;
