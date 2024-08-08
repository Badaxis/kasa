import { useState } from "react";
import Arrow from "../../assets/arrow-up.svg";
import "./Slideshow.scss";

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousSlide = () => {
    const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(previousIndex);
  };
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="slideshow-ctn">
      {slides.map((slide, index) => (
        <img
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          src={slide}
          alt={`Vue numéro ${index + 1} du logement`}
        />
      ))}
      {slides.length > 1 && (
        <div className="slide-controls">
          <div className="slide-arrows">
            <img
              src={Arrow}
              alt="Previous arrow"
              className="slide-arrow previous"
              onClick={previousSlide}
            />
            <img
              src={Arrow}
              alt="Next arrow"
              className="slide-arrow next"
              onClick={nextSlide}
            />
          </div>
          <span className="slide-tracker">{`${currentIndex + 1}/${slides.length}`}</span>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
