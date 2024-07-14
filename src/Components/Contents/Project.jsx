import PropTypes from "prop-types";
import useHover from "../../Hooks/useHover";

function Project({ name, description, languages, link }) {
  // const [active, setActive] = useState(false);
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    // <div className="hover:border-solid hover:border-white hover:border-[1px] hover:rounded-lg p-2">
    <div
      className={`hover:bg-bg-shadow2 duration-100 rounded p-2 cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} target="_blank">
        <h1
          className={`text-xl font-bold mb-2 ${active ? "text-tertiary" : ""}`}
        >
          {name}
        </h1>
        <h4 className={`${active ? "text-ternary" : ""}`}>{description}</h4>
        <ul className="flex gap-2 mt-2">
          {languages.map((lang) => (
            <li
              key={Math.random()}
              className="border-solid border-white rounded-lg px-2 text-cyan-300 font-bold bg-emerald-900"
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
