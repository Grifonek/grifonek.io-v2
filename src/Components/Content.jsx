import About from "./Contents/About";
import Projects from "./Contents/Projects";
import Experience from "./Contents/Experience";
import ContactMe from "./Contents/ContactMe";

function Content() {
  return (
    <div className="space-y-20">
      <About />
      <div className="hover:text-[rgba(255,255,255,0.5)] space-y-20">
        <Projects />
        <Experience />
      </div>
      <ContactMe />
    </div>
  );
}

export default Content;
