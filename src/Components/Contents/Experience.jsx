import Download from "../../UI/Download";
import ExperienceEl from "../../UI/ExperienceEl";

function Experience() {
  return (
    <>
      <div id="experience">
        <h4 className="text-xl font-semibold uppercase mb-6">Experience</h4>
        <ExperienceEl
          positionName={"IT Support"}
          company={"Hanya Corporation"}
          description={
            "Monitoring and maintaining the company computer systems, installing and configuring hardware and software, and solving technical problems"
          }
          dateFrom={"feb 2024"}
        />
        <Download />
      </div>
    </>
  );
}

export default Experience;
