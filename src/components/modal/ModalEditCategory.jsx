import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { ButtonModal, InputModal, LabelModal } from "../customs/@core";
import { CategoryContext } from "../../State/categoryReducer";

export default function ModalEditCategory({ onClose, title, textButton, EditCategory }) {
  const [newCategory, setNewCategory] = useState(EditCategory);
  const { state: categories, dispatch } = useContext(CategoryContext);
  const editInputRef = useRef(null);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleEditCategory = (e) => {
    e.preventDefault();
    if (isDuplicate) {
      return;
    }
    dispatch({ type: "EDIT_CATEGORY", oldCategory: EditCategory, newCategory: newCategory });
    onClose();
  };

  useEffect(() => {
    editInputRef.current.focus();
  }, []);

  useEffect(() => {
    setIsDuplicate(categories.includes(newCategory));
  }, [newCategory, categories]);

  return (
    <Modal onClose={onClose} title={title}>
      <form>
        <div className="flex flex-col">
          <LabelModal htmlFor="category">Title Category</LabelModal>
          <InputModal
            type="text"
            id="category"
            value={newCategory}
            placeholder="Enter New Category"
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            autoFocus
            ref={editInputRef}
          />
          {isDuplicate && (
            <p className="mt-2 text-sm text-red-500">This category already exists.</p>
          )}
        </div>
        <ButtonModal onClick={handleEditCategory}>{textButton}</ButtonModal>
      </form>
    </Modal>
  );
}
