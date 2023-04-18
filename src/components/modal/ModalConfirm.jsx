import React from "react";
import Modal from "./Modal";
import BtnInfo from "../customs/@core/BtnInfo";
import BtnWarning from "../customs/@core/BtnWarning";

export default function ModalConfirm({ onClose, text }) {
  return (
    <Modal onClose={onClose} title="Are you sure?">
      <p className="font-Montserrat text-gray-500">{text}</p>
      <div className="flex justify-end gap-2 text-gray-300 ">
        <BtnInfo onClick={onClose}>Cancel</BtnInfo>
        <BtnWarning>Delete</BtnWarning>
      </div>
    </Modal>
  );
}
