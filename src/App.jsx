import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Contacts from "./Components/Contacts";
import Content from "./Components/Content";
import { BrowserRouter } from "react-router-dom";
import Cursor from "./UI/Cursor";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter>
      <div
        className="min-h-screen flex items-center justify-center text-white"
        ref={ref}
      >
        <div className="w-full max-w-7xl flex h-[calc(100vh-0.1rem)] space-x-20">
          <Cursor parentRef={ref} />
          <div className="w-1/2 flex flex-col justify-center space-y-4">
            <Header />
            <Menu />
            <Contacts />
          </div>
          <div className="w-1/2 flex flex-col overflow-y-scroll no-scrollbar">
            {/* <Routes> */}
            <Content />
            {/* <Route path="/" element={<Content />} /> */}
            {/* <Route path="/project/:name" component={ProjectDetail} /> */}
            {/* </Routes> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
