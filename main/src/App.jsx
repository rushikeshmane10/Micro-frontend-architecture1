import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShellLayout from "./layout/Navbar-sideBar";
import IntegriSection from "integri_component/Home";

function App() {
  return (
    <div className="w-full ">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ShellLayout />}>
            <Route path="/integri" element={<IntegriSection />} />
          </Route>
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
