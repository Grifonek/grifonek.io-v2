import PropTypes from "prop-types";

import { FaExternalLinkAlt } from "react-icons/fa";
import useHover from "../Hooks/useHover";
import i18n from "../i18n";

function Project({ name, description, languages, link, previousVersion }) {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  function handleLinkClick() {
    window.open(link, "_blank");
  }

  return (
    <div
      className={`hover:bg-[#303641] duration-100 rounded p-2 cursor-pointer py-4 hover:shadow-[0 -4px 8px rgba(255, 255, 255, 0.1)]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleLinkClick}
    >
      {/* <a href={link} target="_blank"> */}
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
      {previousVersion && (
        <a
          href={previousVersion}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {i18n.language === "en" ? "Previous version" : "Předchozí verze"}
        </a>
      )}
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
      {/* </a> */}
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  previousVersion: PropTypes.string,
};

export default Project;
