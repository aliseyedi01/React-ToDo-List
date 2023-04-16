import React, { useState } from "react";

export default function AddCategory() {
  const [modalCategory, setModalCategory] = useState(false);

  console.log(modalCategory);

  return (
    <button
      className="ml-4 mt-4 rounded-lg border-2 border-dotted border-slate-300 px-3 py-1 text-sm hover:text-violet-400 dark:border-slate-700"
      onClick={() => setModalCategory(true)}
    >
      Add New
    </button>
  );
}
