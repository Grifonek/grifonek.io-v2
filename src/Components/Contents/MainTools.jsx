import { FaHtml5 } from "react-icons/fa";
import Tool from "../../UI/Tool";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

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
          color={"text-orange-500"}
        />
        <Tool
          name={"TailwindCSS"}
          img={<RiTailwindCssFill className="size-24" />}
          color={"text-cyan-500"}
        />
        <Tool
          name={"JavaScript"}
          img={<IoLogoJavascript className="size-24" />}
          color={"text-yellow-400"}
        />
        <Tool
          name={"React"}
          img={<FaReact className="size-24" />}
          color={"text-cyan-400"}
        />
        <Tool
          name={"Next.js"}
          img={<RiNextjsFill className="size-24" />}
          color={"text-slate-600"}
        />
      </div>
    </div>
  );
}

export default MainTools;
