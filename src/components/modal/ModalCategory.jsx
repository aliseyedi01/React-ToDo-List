import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { ButtonModal, InputModal, LabelModal } from "../customs/@core";
import { CategoryContext } from "../../State/categoryReducer";

export default function ModalCategory({ onClose, title, textButton }) {
  const [newCategory, setNewCategory] = useState("");
  const { state: categories, dispatch } = useContext(CategoryContext);
  const searchInputRef = useRef(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const NewCategory = (e) => {
    e.preventDefault();
    if (isDuplicate) {
      return;
    }
    dispatch({ type: "ADD_CATEGORY", newCategory: newCategory });
    onClose();
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  useEffect(() => {
    setIsDuplicate(categories.includes(newCategory));
  }, [newCategory, categories]);

  return (
    <Modal onClose={onClose} title={title}>
      <form onSubmit={NewCategory}>
        <div className="flex flex-col">
          <LabelModal htmlFor="category">Title Category</LabelModal>
          <InputModal
            type="text"
            autocomplete="off"
            id="category"
            maxLength={10}
            placeholder="Enter New Category"
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            autoFocus
            ref={searchInputRef}
          />
          {isDuplicate && (
            <p className="mt-2 text-sm text-red-500">This category already exists.</p>
          )}
        </div>
        <ButtonModal>{textButton}</ButtonModal>
      </form>
    </Modal>
  );
}
