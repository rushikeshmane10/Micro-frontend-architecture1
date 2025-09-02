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
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {}
  );

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleSectionClick = (label: string, hasSubItems: boolean, item?: MenuItem) => {
    if (hasSubItems) {
      setActiveSection((prev) => (prev === label ? null : label));
      setOpenDropdowns({});
      const defaultPath = item?.subItems?.[0]?.children?.[0]?.path;
      if (defaultPath && !location.pathname.startsWith("/integri")) {
        navigate(defaultPath);
      }
    } else {
      setActiveSection(null);
    }
  };

  const menuItems: MenuItem[] = [
    {
      label: "Integri",
      icon: <Shield size={20} />,
      subItems: [
        {
          label: "Code Integri",
          children: [
            { path: "/integri/home", label: "Targets", icon: <Target size={18} /> },
            { path: "/integri/about", label: "Dashboard", icon: <Home size={18} /> },
          ],
        },
        {
          label: "Model Integri",
          children: [
            { path: "/Model-about", label: "Dashboard", icon: <Home size={18} /> },
            { path: "/Model-targets", label: "Agents", icon: <Target size={18} /> },
            { path: "/Model-scans", label: "Scans", icon: <BarChart size={18} /> },
          ],
        },
      ],
    },
    { label: "Vigil", path: "/vigil/home", icon: <Eye size={20} /> },
  ];

  const activeMenu = menuItems.find((m) => m.label === activeSection);

  return (
    <div className="flex border-gray-700 border-t">
      <div className="w-[68px] flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-white border-r border-gray-700">
        <div className="flex flex-col items-center h-screen pt-16">
          {menuItems.map((item) => {
            const isActive = activeSection === item.label;
            const hasSubItems = !!item.subItems;

            return hasSubItems ? (
              <button
                key={item.label}
                type="button"
                onClick={() => handleSectionClick(item.label, true, item)}
                className={`flex flex-col items-center py-2 w-full hover:bg-gray-800 transition-colors duration-300 ${
                  isActive ? "bg-gray-800" : ""
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
        className={`overflow-hidden bg-gradient-to-b pt-16 from-gray-900 to-gray-950 text-white border-r border-gray-700 transition-all duration-500 ease-in-out h-full ${
          activeMenu && activeMenu.subItems ? "w-[196px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        {activeMenu && activeMenu.subItems && (
          <div className="space-y-4 py-[16px] px-[12px] h-full overflow-auto">
            {activeMenu.subItems.map((section) => {
              const defaultPath = section.children?.[0]?.path;
              return (
                <div key={section.label}>
                  {section.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleDropdown(section.label)}
                        className="flex items-center justify-between w-full p-[6px] text-gray-300 hover:bg-gray-700 rounded-md transition-all"
                      >
                        <span className="text-sm font-medium">{section.label}</span>
                        {openDropdowns[section.label] ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </button>

                      {openDropdowns[section.label] && (
                        <div className="mt-2 space-y-2">
                          {section.children.map((subItem) => {
                            const isActive = location.pathname.startsWith(subItem.path);
                            return (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={() => setActiveSection(null)} 
                                className={`flex items-center p-[6px] rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? "bg-gray-700 font-medium text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`}
                              >
                                <span className="mr-2">{subItem.icon}</span>
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
                      className={`block p-[6px] rounded-md transition-all ${
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
