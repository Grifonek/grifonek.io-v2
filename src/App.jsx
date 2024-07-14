import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Contacts from "./Components/Contacts";
import Content from "./Components/Content";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-bg-main text-white">
        {/* <div className="w-full max-w-6xl flex h-[calc(100vh-10rem)]"> */}
        <div className="w-full max-w-6xl flex items-center">
          <div className="w-1/2 flex flex-col space-y-4">
            <Header />
            <Menu />
            <Contacts />
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <Routes>
              <Route path="/" element={<Content />} />
              {/* <Route path="/project/:name" component={ProjectDetail} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
