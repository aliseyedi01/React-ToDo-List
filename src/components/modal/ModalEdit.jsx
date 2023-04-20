import React, { useContext, useState } from "react";
import Modal from "./Modal";
import BtnInfo from "../customs/@core/BtnInfo";
import BtnWarning from "../customs/@core/BtnWarning";
import { Button, InputModal, LabelModal, Select, TextArea } from "../customs/@core";
import { CheckButton, DoneButton, ImportButton } from "../Utilities";
import { TaskContext } from "../../State/taskReducer";

export default function ModalEdit({ onClose, text, task }) {
  const { dispatch } = useContext(TaskContext);

  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [description, setDescription] = useState(task.description);
  const [selectCategory, setSelectCategory] = useState(task.category);
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isImportant, setIsImportant] = useState(task.important);

  const EditTaskHandler = (e) => {
    e.preventDefault();

    const updatedTask = {
      title: title,
      category: selectCategory,
      description: description,
      date: date,
      completed: isCompleted,
      important: isImportant,
      id: task.id,
    };

    console.log(updatedTask);
    dispatch({ type: "EDIT_TASK", task: updatedTask, id: task.id });

    onClose();
  };

  return (
    <Modal onClose={onClose} title="Edit Task">
      <form className="flex flex-col" onSubmit={EditTaskHandler}>
        {/* title */}
        <LabelModal>
          Title
          <InputModal
            type="text"
            className=" w-full"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </LabelModal>

        {/* date */}
        <LabelModal>
          Date
          <InputModal
            type="date"
            className=" w-full "
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </LabelModal>

        {/* description */}
        <LabelModal>
          Description
          <TextArea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></TextArea>
        </LabelModal>

        {/* Select Category */}
        <LabelModal>
          Select a Category
          <Select
            value={selectCategory}
            onChange={(e) => {
              setSelectCategory(e.target.value);
            }}
          >
            <option>home</option>
            <option>work</option>
            <option>school</option>
          </Select>
        </LabelModal>

        {/* Check Import & Done */}
        <div className="mb-2 flex gap-6 font-DynaPuff">
          <div className="flex items-center gap-1">
            <CheckButton isChecked={isImportant} setChecked={setIsImportant} />
            <span>important</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckButton isChecked={isCompleted} setChecked={setIsCompleted} />
            <span>Done</span>
          </div>
        </div>

        {/* Submit */}
        <BtnInfo className="text-white">Edit Task</BtnInfo>
      </form>
    </Modal>
  );
}
