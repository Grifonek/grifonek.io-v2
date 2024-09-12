import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n";

import Contacts from "./Components/Contacts";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Cursor from "./UI/Cursor";

function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter>
      <div
        className="min-h-screen flex items-center justify-center text-white"
        ref={ref}
      >
        <div className="w-full xl:max-w-7xl flex max-xl:flex-col h-[calc(100vh-0.1rem)] xl:space-x-20 overflow-x-hidden">
          <Cursor parentRef={ref} />
          <div className="xl:w-1/2 flex flex-col items-center text-center xl:items-start xl:text-left xl:justify-center space-y-4 max-lg:mt-6">
            <Header />
            <Menu />
            <Contacts />
          </div>
          <div className="xl:w-1/2 flex flex-col h-full xl:overflow-y-scroll no-scrollbar">
            <Routes>
              <Route path="/" element={<Content />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
