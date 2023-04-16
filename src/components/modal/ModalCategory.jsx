import React from "react";
import Modal from "./Modal";
import { ButtonModal, InputModal, LabelModal } from "../customs/@core";

export default function ModalCategory({ onClose, title, textButton }) {
  return (
    <Modal onClose={onClose} title={title}>
      <from>
        <div className="flex flex-col">
          <LabelModal htmlFor="category">Title Category</LabelModal>
          <InputModal type="text" id="category" placeholder="Enter New Category" />
        </div>
        <ButtonModal>{textButton}</ButtonModal>
      </from>
    </Modal>
  );
}
