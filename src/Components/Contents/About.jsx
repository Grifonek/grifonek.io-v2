import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="mt-12 space-y-4 text-lg text-slate-400 px-2 xl:px-0 items-center text-center xl:items-start xl:text-left xl:justify-center"
    >
      <h3>
        {t("about1.first")}{" "}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about1.second")}
        </span>{" "}
        {t("about1.third")}{" "}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about1.fourth")}
        </span>
        . {t("about1.fifth")}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about1.sixth")}
        </span>
        , {t("about1.seventh")}{" "}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about1.eighth")}
        </span>{" "}
        {t("about1.ninth")}.
      </h3>
      <h3>
        {t("about2.first")}{" "}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about2.second")}
        </span>
        , {t("about2.third")}{" "}
        <span className="font-semibold text-slate-200">
          {t("about2.fourth")}
        </span>
        , {t("about2.fifth")}{" "}
        <span className="font-semibold text-slate-200">
          {" "}
          {t("about2.sixth")}
        </span>
        . {t("about2.seventh")}.
      </h3>
    </div>
  );
}

export default About;
