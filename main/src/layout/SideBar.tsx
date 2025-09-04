import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Target,
  Shield,
  Eye,
  BarChart,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
interface SubItem {
  path: string;
  label: string;
  icon?: JSX.Element;
}

interface Section {
  label: string;
  children?: SubItem[];
}

interface MenuItem {
  label: string;
  path?: string;
  icon: JSX.Element;
  subItems?: Section[];
}

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>("Integri");
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSectionClick = (label: string) => {
    setActiveSection(label);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Integri",
      icon: <Shield size={20} />,
      subItems: [
        {
          label: "Code Integri",
          children: [
            {
              path: "/integri/home",
              label: "Targets",
              icon: <Target size={18} />,
            },
            {
              path: "/integri/about",
              label: "Dashboard",
              icon: <Home size={18} />,
            },
          ],
        },
        {
          label: "Model Integri",
          children: [
            {
              path: "/Model-about",
              label: "Dashboard",
              icon: <Home size={18} />,
            },
            {
              path: "/Model-targets",
              label: "Agents",
              icon: <Target size={18} />,
            },
            {
              path: "/Model-scans",
              label: "Scans",
              icon: <BarChart size={18} />,
            },
          ],
        },
      ],
    },
    { label: "Vigil", path: "/vigil/home", icon: <Eye size={20} /> },
  ];

  const activeMenu = menuItems.find((m) => m.label === activeSection);

  return (
   <div
  style={{
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), radial-gradient(63.8% 100% at 50% 0%, rgba(22, 50, 79, 0.80) 0%, rgba(22, 50, 79, 0.00) 100%), #111",
  }}
  className="flex pt-16 border-t border-gray-700"
>
      <div className="w-[68px] flex flex-col  text-white border-r border-gray-700 p-4">
        <div className="flex flex-col items-center h-screen ">
          {menuItems.map((item) => {
            const isActive = activeSection === item.label;
            const hasSubItems = !!item.subItems;

            return hasSubItems ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSectionClick(item.label, true, item)}
                className={`flex flex-col items-center py-2 w-full hover:bg-gray-800  transition-colors duration-300 ${
                  isActive ? "bg-gray-800 rounded-lg " : ""
                }`}
              >
                {item.icon}
                <span className="text-[11px] mt-1">{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path || "#"}
                className={`flex flex-col items-center py-2 w-full hover:bg-gray-800 transition-colors duration-300 ${
                  location.pathname.startsWith(item.path || "")
                    ? "bg-gray-800"
                    : ""
                }`}
              >
                {item.icon}
                <span className="text-[11px] mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`overflow-hidden   text-white border-r border-gray-700 transition-all duration-500 ease-in-out h-full w-[196px] p-4`}
      >
        {activeMenu && activeMenu.subItems && (
          <div className="h-full overflow-auto  ">
            {activeMenu.subItems.map((section, i) => {
              const defaultPath = section.children?.[0]?.path;
              return (
                <div key={section.label} className="">
                  {section.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(section.label)}
                        className={`flex items-center justify-between w-full text-gray-300 hover:bg-gray-700 rounded-md transition-all   p-[6px]  ${
                          i === 0 ? "" : "mt-4"
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {section.label}
                        </span>
                        {openDropdowns[section.label] ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </button>

                      {openDropdowns[section.label] && (
                        <div className=" ">
                          {section.children.map((subItem) => {
                            const isActive = location.pathname.startsWith(
                              subItem.path
                            );
                            return (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`flex items-center rounded-lg transition-all duration-300 mt-4 p-[6px] gap-x-1 ${
                                  isActive
                                    ? "bg-gray-700 font-medium text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`}
                              >
                                <span>{subItem.icon}</span>
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={defaultPath || "#"}
                      className={`block  rounded-md transition-all ${
                        defaultPath && location.pathname.startsWith(defaultPath)
                          ? "bg-gray-700 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {section.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
