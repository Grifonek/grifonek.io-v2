import PropTypes from "prop-types";

function ExperienceEl({
  dateFrom,
  dateTo,
  positionName,
  company,
  description,
}) {
  return (
    <div>
      <div className="uppercase flex float-left font-semibold">
        {dateTo ? `${dateFrom} - ${dateTo}` : `${dateFrom} - present`}
      </div>
      <div className="flex flex-col pl-8">
        <h1 className="font-bold">
          {positionName}-{company}
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
