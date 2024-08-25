import PropTypes from "prop-types";
import useHover from "../Hooks/useHover";
import { useTranslation } from "react-i18next";

function ExperienceEl({
  dateFrom,
  dateTo,
  positionName,
  company,
  description,
}) {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();
  const { t } = useTranslation();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`hover:bg-[#303641] hover:shadow-[0 -4px 8px rgba(255, 255, 255, 0.1)] duration-100 rounded p-2 ${
        active ? "text-ternary" : ""
      }`}
    >
      <div className="uppercase flex float-left font-semibold text-xs mt-1 text-slate-400">
        {dateTo
          ? `${dateFrom} — ${dateTo}`
          : `${dateFrom} — ${t("itSupport.now")}`}
      </div>
      <div className="flex flex-col pl-8">
        <h1
          className={`font-bold text-lg mb-2 ${active ? "text-teal-300" : ""}`}
        >
          {positionName} - {company}
        </h1>
        <p className={`${active ? "text-ternary" : "text-slate-400"}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

ExperienceEl.propTypes = {
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string,
  positionName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceEl;
