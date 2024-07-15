import { useEffect, useRef } from "react";

function Menu() {
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
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a
            onClick={() => {
              about.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            ABOUT
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a
            onClick={() => {
              projects.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            PROJECTS
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a
            onClick={() => {
              experience.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            EXPERIENCE
          </a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a
            onClick={() => {
              contact.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            CONTACT ME
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
