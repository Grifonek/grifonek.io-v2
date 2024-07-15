import ExperienceEl from "../../UI/ExperienceEl";

function Experience() {
  return (
    <div>
      <ExperienceEl
        positionName={"IT Support"}
        company={"Hanya Corporation"}
        description={
          "Monitoring and maintaining the company computer systems, installing and configuring hardware and software, and solving technical problems"
        }
        dateFrom={"feb 2024"}
      />
    </div>
  );
}

export default Experience;
