import React, { useState } from "react";
import ModalNew from "../modal/ModalNew";

export default function NewTaskButton({ isListInView }) {
  const [showModalNew, setShowModalNew] = useState(false);
  //   console.log(showModalNew);

  return (
    <>
      {showModalNew && (
        <ModalNew
          text="Add New Task"
          onClose={() => {
            setShowModalNew(false);
          }}
        />
      )}

      <li
        className={`grid w-full place-content-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400 transition hover:bg-slate-300 hover:text-slate-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
          isListInView ? "h-20 sm:h-32" : "h-52 sm:h-64"
        }`}
        onClick={() => {
          setShowModalNew(true);
        }}
      >
        Add New Task
      </li>
    </>
  );
}
