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

// Define AddUserModal first

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

// Define Navbar after AddUserModal
export const Navbar = () => {
  return (
    <div className="w-full absolute z-50 h-[64px] flex items-center px-6 bg-gray-900-950 shadow-md">
      <div className="flex items-center space-x-2 h-8 w-32">
        <img
          src={logo}
          alt="TrueArmor Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="ml-auto flex items-center space-x-6 text-gray-300">
        <AddUserModal />
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
