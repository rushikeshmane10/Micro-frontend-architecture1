import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Sidebar } from "./SideBar";

const ShellLayout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-100  overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ShellLayout;
