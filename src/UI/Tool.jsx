import PropTypes from "prop-types";
import { useState } from "react";

function Tool({ name, img, color }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="flex items-center justify-center cursor-pointer w-40 h-40 sm:w-24 sm:h-24 hover:bg-[#303641] rounded duration-100 hover:shadow-[0 -4px 8px rgba(255, 255, 255, 0.1)]"
      onClick={() => setIsVisible(!isVisible)}
    >
      {isVisible ? (
        <p className="text-sm font-bold break-words">{name}</p>
      ) : (
        <span className={color}>{img}</span>
      )}
    </div>
  );
}

Tool.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tool;
