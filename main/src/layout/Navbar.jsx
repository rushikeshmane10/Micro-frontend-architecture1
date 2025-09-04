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
import { Button1 } from "@your-org/design-system/components";

function AddUserModal() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="p-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
            Blue
          </Button>
          <Badge color="purple">Purple</Badge>
          <Button color="gray">Gray</Button>
          <Button className="bg-bl" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

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
      <div className="ml-auto flex items-center space-x-6 text-gray-300">
        <Button1> Click</Button1>
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
