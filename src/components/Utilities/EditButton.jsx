import React, { useState } from "react";
import ModalEdit from "../modal/ModalEdit";
import { FiEdit } from "react-icons/fi";

export default function EditButton({ task }) {
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <>
      {showModalEdit && (
        <ModalEdit
          text="This task Edit"
          onClose={() => {
            setShowModalEdit(false);
          }}
        />
      )}

      <button
        title="Edit"
        onClick={() => {
          setShowModalEdit(true);
        }}
      >
        <FiEdit />
      </button>
    </>
  );
}
