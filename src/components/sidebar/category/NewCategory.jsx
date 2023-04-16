import React, { useState } from "react";
import ModalCategory from "../../modal/ModalCategory";

export default function AddCategory() {
  const [modalCategory, setModalCategory] = useState(false);

  // console.log(modalCategory);

  const closeModalCategory = () => {
    setModalCategory(false);
  };

  return (
    <>
      {modalCategory && (
        <ModalCategory
          textButton="Create"
          onClose={closeModalCategory}
          title="Create new Category"
        />
      )}

      <button
        className="ml-4 mt-4 rounded-lg border-2 border-dotted border-slate-300 px-3 py-1 text-sm hover:text-violet-400 dark:border-slate-700"
        onClick={() => setModalCategory(true)}
      >
        Add New
      </button>
    </>
  );
}
