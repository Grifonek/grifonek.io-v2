import { useTranslation } from "react-i18next";
import Project from "../../UI/Project";

function Projects() {
  const { t } = useTranslation();

  return (
    <div id="projects" className="space-y-5">
      <h4 className="text-xl font-semibold uppercase text-center xl:items-start xl:text-left">
        {t("headingProject")}
      </h4>
      <Project
        name={t("monsterWordsGame.name")}
        description={t("monsterWordsGame.desc")}
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://monsterwordsgame.netlify.app/"}
      />
      <Project
        name={t("randomFilm.name")}
        description={t("randomFilm.desc")}
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://randomfilm.netlify.app/"}
      />
      <Project
        name={t("ultimateBarberClub.name")}
        description={t("ultimateBarberClub.desc")}
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://ultimatebarberclub.netlify.app/"}
      />
      <Project
        name={t("burgerLovers.name")}
        description={t("burgerLovers.desc")}
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://burger-lovers.netlify.app/"}
      />
    </div>
  );
}

export default Projects;
