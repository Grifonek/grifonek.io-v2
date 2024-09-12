import { useTranslation } from "react-i18next";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import Tool from "../../UI/Tool";

function MainTools() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 items-center text-center xl:items-start xl:text-left xl:justify-center">
      <h4 className="text-xl font-semibold uppercase">
        {t("mainToolsHeading")}
      </h4>

      <div className="sm:flex sm:justify-center sm:space-x-3 flex max-sm:flex-wrap justify-center">
        <Tool
          name={"HTML"}
          img={<FaHtml5 className="size-24" />}
          color={"text-html"}
        />
        <Tool
          name={"TailwindCSS"}
          img={<RiTailwindCssFill className="size-24" />}
          color={"text-tailwind"}
        />
        <Tool
          name={"TypeScript"}
          img={<BiLogoTypescript className="size-28" />}
          color={"text-typescript"}
        />
        <Tool
          name={"React"}
          img={<FaReact className="size-24" />}
          color={"text-react"}
        />
        <Tool
          name={"Next.js"}
          img={<RiNextjsFill className="size-24" />}
          color={"text-nextjs"}
        />
      </div>
    </div>
  );
}

export default MainTools;
