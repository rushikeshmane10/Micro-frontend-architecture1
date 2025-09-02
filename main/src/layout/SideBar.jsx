import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Target,
  Shield,
  Eye,
  Settings,
  BarChart,
  Users,
  Building2,
  DollarSign,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
export const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const menuItems = [
    {
      label: "Code Integri",
      icon: <Shield size={20} />,
      subItems: [
        {
          label: "Code Integri",
          children: [
            { path: "/about", label: "Dashboard", icon: <Home size={18} /> },
            { path: "/targets", label: "Targets", icon: <Target size={18} /> },
            { path: "/scans", label: "Scans", icon: <BarChart size={18} /> },
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
    { label: "Vigil", path: "/vigil", icon: <Eye size={20} /> },
    {
      label: "Clarity",
      path: "/clarity",
      icon: <Eye size={20} />,
      subItems: [
        { path: "/clarity-dashboard", label: "Dashboard" },
        { path: "/clarity-settings", label: "Settings" },
      ],
    },
    {
      label: "Model Integri",
      icon: <Settings size={20} />,
      subItems: [
        {
          label: "Model Options",
          children: [
            {
              path: "/watchdog-dashboard",
              label: "Dashboard",
              icon: <Home size={18} />,
            },
            { path: "/agents", label: "Agents", icon: <Users size={18} /> },
            {
              path: "/watchdog-scans",
              label: "Scans",
              icon: <BarChart size={18} />,
            },
          ],
        },
      ],
    },
    { label: "Company", path: "/company", icon: <Building2 size={20} /> },
    { label: "Finance", path: "/finance", icon: <DollarSign size={20} /> },
  ];

  return (
    <div className="flex h-screen border-gray-700 border-t">
      <div className="w-20 flex flex-col bg-gradient-to-b from-gray-900 to-gray-950 text-white border-r border-gray-700 h-full">
        <div className="flex flex-col py-4 space-y-2 items-center h-full">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() =>
                item.subItems
                  ? setActiveSection(
                      activeSection === item.label ? null : item.label
                    )
                  : setActiveSection(null)
              }
              className={`flex flex-col items-center py-2 w-full hover:bg-gray-800 transition-colors duration-300 ${
                activeSection === item.label ? "bg-gray-800" : ""
              }`}
            >
              {item.icon}
              <span className="text-[11px] mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub Sidebar */}
      <div
        className={`overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 text-white border-r border-gray-700 transition-all duration-500 ease-in-out h-full ${
          activeSection &&
          menuItems.find((m) => m.label === activeSection)?.subItems
            ? "w-56 opacity-100"
            : "w-0 opacity-0"
        }`}
      >
        {activeSection &&
          menuItems.find((m) => m.label === activeSection)?.subItems && (
            <div className="p-4 space-y-4 h-full overflow-auto">
              {menuItems
                .find((m) => m.label === activeSection)
                .subItems.map((section) => (
                  <div key={section.label || section.path}>
                    {section.children ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(section.label)}
                          className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-md transition-all"
                        >
                          <span className="text-sm font-medium">
                            {section.label}
                          </span>
                          {openDropdowns[section.label] ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>

                        {openDropdowns[section.label] && (
                          <div className="mt-2 space-y-2">
                            {section.children.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300 ${
                                  location.pathname === subItem.path
                                    ? "bg-gray-700 font-medium"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                }`}
                              >
                                <span className="mr-2">{subItem.icon}</span>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={section.path}
                        className={`block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-all ${
                          location.pathname === section.path
                            ? "bg-gray-700 text-red-500"
                            : ""
                        }`}
                      >
                        {section.icon && (
                          <span className="mr-2">{section.icon}</span>
                        )}
                        {section.label}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          )}
      </div>
    </div>
  );
};
