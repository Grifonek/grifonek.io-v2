import PropTypes from "prop-types";
import useHover from "../Hooks/useHover";

function ExperienceEl({
  dateFrom,
  dateTo,
  positionName,
  company,
  description,
}) {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover:bg-bg-shadow2 duration-100 rounded p-2 cursor-pointer ${
        active ? "text-ternary" : ""
      }`}
    >
      <div className="uppercase flex float-left font-semibold text-sm text-gray-400">
        {dateTo ? `${dateFrom} — ${dateTo}` : `${dateFrom} — present`}
      </div>
      <div className="flex flex-col pl-8">
        <h1
          className={`font-bold text-lg mb-2 ${active ? "text-tertiary" : ""}`}
        >
          {positionName} - {company}
        </h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

ExperienceEl.propTypes = {
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  positionName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceEl;
