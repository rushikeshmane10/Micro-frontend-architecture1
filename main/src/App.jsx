import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ShellLayout from "./layout/Navbar-sideBar";

const HomePage = lazy(() => import("integri_component/HomePage"));
const AboutPage = lazy(() => import("integri_component/AboutPage"));

export default function App() {
    return (
      <div className="w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ShellLayout />}>
              <Route path="/integri/home" element={<HomePage />} />
              <Route path="/integri/about" element={<AboutPage />} />
              <Route path="/vigil/home" element={<HomePage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    );
  }
  