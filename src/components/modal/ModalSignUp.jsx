import React, { useState } from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function ModalSignUp({ onClose }) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal onClose={onClose} title="Sign Up" className="w-80">
      <div className="flex h-max flex-col gap-2 text-gray-900 ">
        <div className="flex flex-col ">
          <LabelModal htmlFor="email" className="mb-1 text-sm">
            Email
          </LabelModal>
          <input
            type="email"
            name=""
            id="email"
            className="rounded-md pl-2 "
            onChange={(event) => {
              setSignUpEmail(event.target.value);
            }}
          />
        </div>

        <div className="flex flex-col ">
          <LabelModal htmlFor="password" className="mb-1 text-sm">
            Password
          </LabelModal>
          <input
            type="password"
            name=""
            id="password"
            className=" rounded-md pl-2"
            onChange={(event) => {
              setSignUpPassword(event.target.value);
            }}
          />
        </div>

        <Button className="bg-sky-800 text-slate-300" onClick={signUp}>
          sign Up
        </Button>
      </div>
    </Modal>
  );
}
