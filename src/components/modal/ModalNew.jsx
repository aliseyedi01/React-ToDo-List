import React from "react";
import Modal from "./Modal";
import BtnInfo from "../customs/@core/BtnInfo";
import BtnWarning from "../customs/@core/BtnWarning";
import { Button, InputModal, LabelModal, Select, TextArea } from "../customs/@core";
import { CheckButton, DoneButton, ImportButton } from "../Utilities";

export default function ModalNew({ onClose, text }) {
  return (
    <Modal onClose={onClose} title={text}>
      <form className="flex flex-col">
        {/* title */}
        <LabelModal>
          Title
          <InputModal type="text" className=" w-full" />
        </LabelModal>

        {/* date */}
        <LabelModal>
          Date
          <InputModal type="date" className=" w-full " />
        </LabelModal>

        {/* description */}
        <LabelModal>
          Description
          <TextArea></TextArea>
        </LabelModal>

        {/* Select Category */}
        <LabelModal>
          Select a Category
          <Select>
            <option>Home</option>
            <option>School</option>
            <option>Sport</option>
            <option>Programming</option>
          </Select>
        </LabelModal>

        {/* Check Import & Done */}
        <div className="mb-2 flex gap-6 font-DynaPuff">
          <div className="flex items-center gap-1">
            <CheckButton />
            <span>important</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckButton />
            <span>Done</span>
          </div>
        </div>

        {/* Submit */}
        <BtnInfo className="text-white">Add Task</BtnInfo>
      </form>
    </Modal>
  );
}
