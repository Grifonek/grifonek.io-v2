import useHover from "../../Hooks/useHover";

function About() {
  const { active, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div
      className={`${active ? "text-ternary" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A aspernatur
        incidunt maiores numquam voluptate ullam nemo autem libero nam? Porro
        culpa et veritatis nisi, debitis sunt cum blanditiis atque totam fugit
        sequi vero iure voluptates eius delectus architecto. Ex qui recusandae
        maxime exercitationem, itaque nam veritatis hic. Minima, explicabo
        dolore.
      </p>
    </div>
  );
}

export default About;