import PropTypes from "prop-types";
import useHover from "../Hooks/useHover";
import { FaExternalLinkAlt } from "react-icons/fa";

function Project({ name, description, languages, link }) {
  // const [active, setActive] = useState(false);
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    // <div className="hover:border-solid hover:border-white hover:border-[1px] hover:rounded-lg p-2">
    <div
      // className={`hover:bg-bg-shadow2 duration-100 rounded p-2 cursor-pointer py-4`}
      className={`hover:bg-[#303641] duration-100 rounded p-2 cursor-pointer py-4 hover:shadow-[0 -4px 8px rgba(255, 255, 255, 0.1)]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} target="_blank">
        <h1
          className={`flex text-xl font-semibold mb-2 items-center gap-2 ${
            active ? "text-teal-300" : ""
          }`}
        >
          {name}
          {active ? <FaExternalLinkAlt className="text-sm" /> : null}
        </h1>
        <h4 className={`${active ? "text-ternary" : "text-slate-400"}`}>
          {description}
        </h4>
        <ul className="flex gap-2 mt-2">
          {languages.map((lang) => (
            <li
              key={lang}
              className="border-solid border-white rounded-xl px-2 text-teal-300 py-1 text-xs bg-teal-400/10 "
            >
              {lang}
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default Project;
