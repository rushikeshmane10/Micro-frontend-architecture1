import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./SideBar.tsx";

const ShellLayout = () => {
  return (
 <div className="h-screen overflow-hidden">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 bg-white pt-20 px-5 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShellLayout;
