import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";

export default function ModalT({ 
  open, 
  onClose, 
  content = {} 
}) {
  const {
    title = "Default Title",
    body = (
      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        This is the default modal body. You can pass your own content via `content.body`.
      </p>
    ),
    footer = (
      <button
        onClick={onClose}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Default Action
      </button>
    ),
  } = content;

  return (
    <Modal dismissible show={open} onClose={onClose}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  );
}
