import { Bell, MoreVertical } from "lucide-react";
import logo from "/Asset/logo.png"; // For Vite
import { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { ButtonT } from "@your-org/design-system";

export const Navbar = () => {
  return (
    <div
      style={{
        background: `
      linear-gradient(90deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 100%), 
      radial-gradient(100% 63.8% at 0% 50%, rgba(22, 50, 79, 0.80) 0%, rgba(22, 50, 79, 0.00) 100%), 
      #111
    `,
      }}
      className="w-full absolute z-50 h-[64px] flex items-center px-6 shadow-md border-b border-gray-700"
    >
      <div className="flex items-center space-x-2 h-8 w-32">
        <img
          src={logo}
          alt="TrueArmor Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-auto flex items-center space-x-6  text-gray-300">
        <ButtonT icon={<Bell />}></ButtonT>
        <button className="text-white text-xs font-medium">Settings</button>
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
