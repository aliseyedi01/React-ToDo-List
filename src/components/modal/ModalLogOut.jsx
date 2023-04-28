import React, { useState } from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";

export default function ModalLogOut({ onClose, user }) {
  const SignOut = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Modal onClose={onClose} title="Log Out" className="w-80">
      <div className="flex h-max flex-col gap-2 text-gray-900 ">
        <p className="text-base text-white">
          Your Email : <span className="text-red-700 underline">{user?.email}</span>{" "}
        </p>
        <Button className="bg-sky-800 text-slate-300" onClick={SignOut}>
          Log Out
        </Button>
      </div>
    </Modal>
  );
}
