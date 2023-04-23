import React, { useContext } from "react";
import Modal from "./Modal";
import BtnInfo from "../customs/@core/BtnInfo";
import BtnWarning from "../customs/@core/BtnWarning";
import { TaskContext } from "../../State/taskReducer";
import { CategoryContext } from "../../State/categoryReducer";

export default function ModalConfirm({ onClose, text, task, type }) {
  const { dispatch } = useContext(TaskContext);
  const { dispatch: categoryDispatch } = useContext(CategoryContext);

  function handleDelete() {
    if (type === "task") {
      console.log("akbar");
      dispatch({ type: "Delete_TASK", id: task.id });
    } else {
      categoryDispatch({ type: "REMOVE_CATEGORY", DeleteCategory: task });
    }

    onClose();
  }

  return (
    <Modal onClose={onClose} title="Are you sure?">
      <p className="font-Montserrat text-gray-500">
        <span className="mr-1  text-red-700 underline">{task.title ? task.title : task}</span>
        {text}
      </p>
      <div className="flex justify-end gap-2 text-gray-300 ">
        <BtnInfo onClick={onClose}>Cancel</BtnInfo>
        <BtnWarning onClick={handleDelete}>Delete</BtnWarning>
      </div>
    </Modal>
  );
}
