import { GoDownload } from "react-icons/go";
import useHover from "../Hooks/useHover";
import CV from "../../CV/Max-Demel.pdf";
import { useTranslation } from "react-i18next";

function Download() {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();
  const { t } = useTranslation();

  return (
    <a
      href={CV}
      target="_blank"
      className={`flex items-center pt-2 ml-4 w-fit gap-2 ${
        active ? "text-teal-300" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {t("resume")}
      <GoDownload />
    </a>
  );
}

export default Download;
