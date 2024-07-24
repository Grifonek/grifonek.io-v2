import { useEffect } from "react";
import PropTypes from "prop-types";

function Cursor({ parentRef }) {
  useEffect(() => {
    const handleMove = (e) => {
      const { x, y } = parentRef.current.getBoundingClientRect();

      const posX = e.clientX - x;
      const posY = e.clientY - y;

      parentRef.current.style.setProperty("--x", posX);
      parentRef.current.style.setProperty("--y", posY);
    };

    parentRef.current.addEventListener("mousemove", handleMove);

    return () => {
      parentRef.current.removeEventListener("mousemove", handleMove);
    };
  }, [parentRef]);

  return (
    <div
      className="light-effect absolute"
      style={{
        top: "calc(var(--y, 0) * 1px)",
        left: "calc(var(--x, 0) * 1px)",
      }}
    ></div>
  );
}

Cursor.propTypes = {
  parentRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Cursor;
