import About from "./Contents/About";
import ContactMe from "./Contents/ContactMe";
import Experience from "./Contents/Experience";
import MainTools from "./Contents/MainTools";
import Projects from "./Contents/Projects";

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
