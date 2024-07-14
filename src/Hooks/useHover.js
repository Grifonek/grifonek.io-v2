import { useState } from "react";

function useHover() {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return { active, handleMouseEnter, handleMouseLeave };
}

export default useHover;
