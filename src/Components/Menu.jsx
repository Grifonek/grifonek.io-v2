import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();

  const about = useRef(null);
  const projects = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    const aboutId = document.querySelector("#about");
    const projectsId = document.querySelector("#projects");
    const experienceId = document.querySelector("#experience");
    const contactId = document.querySelector("#contact");

    about.current = aboutId;
    projects.current = projectsId;
    experience.current = experienceId;
    contact.current = contactId;
  }, []);

  return (
    <div>
      <ul className="space-y-3 py-6 font-medium">
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit uppercase">
          <a
            onClick={() => {
              about.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            {t("menu.first")}
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit uppercase">
          <a
            onClick={() => {
              projects.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            {t("menu.second")}
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit uppercase">
          <a
            onClick={() => {
              experience.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("menu.third")}
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit uppercase">
          <a
            onClick={() => {
              contact.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {t("menu.fourth")}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
