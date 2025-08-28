import React, { Suspense } from "react";
import Homepage from "./components/HomeSection";

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Homepage />
      </Suspense>
    </div>
  );
}
