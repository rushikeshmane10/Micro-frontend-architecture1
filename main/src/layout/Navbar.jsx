import { Bell, MoreVertical } from "lucide-react";
import logo from "../../public/Asset/logo.png";

export const Navbar = () => {
  return (
    <div className="w-full absolute z-50 h-[64px] flex items-center px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md">
      <div className="flex items-center space-x-2 h-8 w-32  ">
        <img
          src={logo}
          alt="TrueArmor Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-auto flex items-center space-x-6 text-gray-300">
        <button className="hover:text-white text-xs">Settings</button>
        <button className="hover:text-white">
          <Bell size={16} />
        </button>
        <button className="hover:text-white">
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
};
