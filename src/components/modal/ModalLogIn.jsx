import React from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";

export default function ModalLogIn({ onClose }) {
  return (
    <Modal onClose={onClose} title="sign up" className="w-80">
      <div className="flex h-max flex-col gap-2 text-gray-900 ">
        <div className="flex flex-col ">
          <LabelModal htmlFor="email" className="mb-1 text-sm">
            Email
          </LabelModal>
          <input type="email" name="" id="email" className="rounded-md pl-2 " />
        </div>

        <div className="flex flex-col ">
          <LabelModal htmlFor="password" className="mb-1 text-sm">
            Password
          </LabelModal>
          <input type="password" name="" id="password" className=" rounded-md pl-2" />
        </div>

        <Button className="bg-sky-800 text-slate-300">Sign Up</Button>
      </div>
    </Modal>
  );
}
