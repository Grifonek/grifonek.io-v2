import About from "./Contents/About";
import Projects from "./Contents/Projects";
import Experience from "./Contents/Experience";
import ContactMe from "./Contents/ContactMe";
import MainTools from "./Contents/MainTools";

function Content() {
  return (
    <div className="space-y-10 lg:space-y-20">
      <About />
      <div className="hover:text-slate-400 space-y-10 lg:space-y-20">
        <MainTools />
        <Projects />
        <Experience />
      </div>
      <ContactMe />
    </div>
  );
}

export default Content;
