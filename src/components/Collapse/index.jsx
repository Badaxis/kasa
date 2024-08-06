import { useEffect, useRef, useState } from "react";
import Arrow from "../../assets/arrow-up.svg";
import "../../styles/Collapse.scss";

function Collapse({ title, content }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  }, [isOpen]);

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
        style={{
          height: isOpen ? contentHeight : 0,
          display: isOpen ? "block" : "none",
        }}
        className="collapse-content"
      >
        <div ref={contentRef}>{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
