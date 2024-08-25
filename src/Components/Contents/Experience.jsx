import { useTranslation } from "react-i18next";
import Download from "../../UI/Download";
import ExperienceEl from "../../UI/ExperienceEl";

function Experience() {
  const { t } = useTranslation();

  return (
    <>
      <div id="experience">
        <h4 className="text-xl font-semibold uppercase mb-6 text-center xl:items-start xl:text-left">
          {t("headingExperience")}
        </h4>
        <ExperienceEl
          positionName={t("itSupport.name")}
          company={t("itSupport.company")}
          description={t("itSupport.desc")}
          dateFrom={t("itSupport.dateFrom")}
        />
        <div className="max-md:flex max-md:justify-center max-md:mt-6">
          <Download />
        </div>
      </div>
    </>
  );
}

export default Experience;
