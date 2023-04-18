import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import ModalConfirm from "../../modal/ModalConfirm";

export default function TaskAction() {
  const [showModalConfirm, setShowModalConfirm] = useState(false);

  return (
    <div className="flex items-center justify-between pt-1">
      {/* category */}
      <button className="rounded-md bg-Light_Secondary px-3 py-1  dark:bg-Dark_Secondary">
        <span className="text-Light_OnSecondary dark:text-Light_OnSecondary ">Home</span>
      </button>
      {/* button action */}
      <div className="flex items-center gap-1 text-2xl text-Light_OnSurface dark:text-Dark_OnSurface ">
        {/* Done */}
        <button className="flex gap-2" title="Done">
          <BsCheckSquareFill />
          {/* <ImCheckboxUnchecked /> */}
        </button>
        {/* Import */}
        <button className="flex gap-2" title="Important">
          <AiFillStar />
          {/* <AiOutlineStar /> */}
        </button>

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
        <button title="Edit">
          <FiEdit />
        </button>
      </div>
    </div>
  );
}
