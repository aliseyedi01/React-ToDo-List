import { RiDeleteBin5Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import ModalConfirm from "../../modal/ModalConfirm";
import ModalEdit from "../../modal/ModalEdit";
import { DoneButton, ImportButton } from "../../Utilities";

export default function TaskAction({ task }) {
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  return (
    <div className="flex items-center justify-between pt-1">
      {/* category */}
      <button className="rounded-md bg-Light_Secondary px-3 py-1  dark:bg-Dark_Secondary">
        <span className="text-Light_OnSecondary dark:text-Light_OnSecondary ">Home</span>
      </button>

      {/* button action */}
      <div className="flex items-center gap-1 text-2xl text-Light_OnSurface dark:text-Dark_OnSurface ">
        {/* Done */}
        <DoneButton task={task} />

        {/* Important */}
        <ImportButton task={task} />

        {/* Delete */}

        {showModalConfirm && (
          <ModalConfirm
            text="This task is permanently deleted"
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

        {/* Edit */}

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
      </div>
    </div>
  );
}
