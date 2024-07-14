import About from "./Contents/About";
import Projects from "./Contents/Projects";
import Experience from "./Contents/Experience";
import ContactMe from "./Contents/ContactMe";

function Content() {
  return (
    <div className="space-y-10 hover:text-[rgba(255,255,255,0.5)] overflow-scroll">
      <About />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default Content;
