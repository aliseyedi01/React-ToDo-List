import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { ButtonModal, InputModal, LabelModal } from "../customs/@core";
import { CategoryContext } from "../../State/categoryReducer";

export default function ModalCategory({ onClose, title, textButton }) {
  const [newCategory, setNewCategory] = useState("");
  const { dispatch } = useContext(CategoryContext);

  const NewCategory = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CATEGORY", newCategory: newCategory });
    onClose();
  };

  console.log(newCategory);

  return (
    <Modal onClose={onClose} title={title}>
      <form onSubmit={NewCategory}>
        <div className="flex flex-col">
          <LabelModal htmlFor="category">Title Category</LabelModal>
          <InputModal
            type="text"
            id="category"
            placeholder="Enter New Category"
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
          />
        </div>
        <ButtonModal>{textButton}</ButtonModal>
      </form>
    </Modal>
  );
}
