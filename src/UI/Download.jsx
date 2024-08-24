import { GoDownload } from "react-icons/go";
import useHover from "../Hooks/useHover";
import CV from "../../CV/Max-Demel.pdf";

function Download() {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <a
      href={CV}
      target="_blank"
      className={`flex items-center pt-2 ml-4 w-fit gap-2 ${
        active ? "text-teal-300" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      My Resume
      <GoDownload />
    </a>
  );
}

export default Download;
