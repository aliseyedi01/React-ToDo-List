import React, { useState } from "react";
import ModalConfirm from "../../components/modal/ModalConfirm";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function DeleteButton({ task }) {
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  return (
    <>
      {showModalConfirm && (
        <ModalConfirm
          task={task}
          text="is permanently deleted"
          onClose={() => {
            setShowModalConfirm(false);
          }}
        />
      )}

      <button
        title="Delete"
        onClick={() => {
          setShowModalConfirm(true);
        }}
      >
        <RiDeleteBin5Fill />
      </button>
    </>
  );
}
