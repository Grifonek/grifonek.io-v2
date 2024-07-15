import Project from "../../UI/Project";

function Projects() {
  return (
    <div id="projects" className="space-y-5">
      <h4 className="text-xl font-semibold uppercase">Projects</h4>
      <Project
        name={"Monster Words Game"}
        description={
          "Small website game to burn out your fingers with difficulty levels."
        }
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://monsterwordsgame.netlify.app/"}
      />
      <Project
        name={"Random Film"}
        description={
          "Website based on film database API generating random films based on your preference."
        }
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://randomfilm.netlify.app/"}
      />
      <Project
        name={"Ultimate Barber Club"}
        description={"Barber shop website with calendar and ordering system."}
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://ultimatebarberclub.netlify.app/"}
      />
      <Project
        name={"Burger Lovers"}
        description={
          "Burger restaurant website with menu, cart and ordering system."
        }
        languages={["HTML", "CSS", "JavaScript"]}
        link={"https://burger-lovers.netlify.app/"}
      />
    </div>
  );
}

export default Projects;
