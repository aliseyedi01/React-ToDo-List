import React, { useContext } from "react";
import Modal from "./Modal";
import BtnInfo from "../customs/@core/BtnInfo";
import BtnWarning from "../customs/@core/BtnWarning";
import { TaskContext } from "../../State/taskReducer";

export default function ModalConfirm({ onClose, text, task }) {
  const { dispatch } = useContext(TaskContext);

  function handleTaskDelete(id) {
    dispatch({ type: "Delete_TASK", id: task.id });
    // console.log("ali");
  }

  return (
    <Modal onClose={onClose} title="Are you sure?">
      <p className="font-Montserrat text-gray-500">
        <span className="mr-1  text-red-700 underline">{task.title}</span>
        {text}
      </p>
      <div className="flex justify-end gap-2 text-gray-300 ">
        <BtnInfo onClick={onClose}>Cancel</BtnInfo>
        <BtnWarning onClick={handleTaskDelete}>Delete</BtnWarning>
      </div>
    </Modal>
  );
}
