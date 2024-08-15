import { useRef, useState } from "react";
import Arrow from "../../assets/arrow-up.svg";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const contentRef = useRef(null);
  const contentHeight = contentRef.current?.scrollHeight;
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-btn">
        <h2 className="collapse-title">{title}</h2>
        <img
          className={`arrow-button ${isOpen ? "inverted" : ""}`}
          src={Arrow}
          alt="Arrow collapse"
          onClick={toggleIsOpen}
        />
      </div>
      <div
        className="collapse-content-ctn"
        style={{
          height: isOpen ? contentHeight : 0,
        }}
      >
        <div ref={contentRef} className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
