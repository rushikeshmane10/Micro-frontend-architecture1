import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShellLayout from "./layout/Navbar-sideBar";
const Home = React.lazy(() => import("home_component/Home"));
const About = React.lazy(() => import("about_section/About"));
function App() {
  return (
    <div className="w-full ">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ShellLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
