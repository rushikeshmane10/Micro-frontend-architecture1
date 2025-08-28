import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useStore } from "store/store";
const Navbar = React.lazy(() => import("common_component/Navbar"));
const Home = React.lazy(() => import("home_component/Home"));
// const About = React.lazy(() => import("about_component/About"));
function App() {
     const { counter, increment } = useStore();
  return (
    <>
      <React.Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </React.Suspense>
    </>
  );
}

export default App;
