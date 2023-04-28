import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export default function SignUp({ onClose, setUser }) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      //   console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useMemo(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("currentUser", currentUser);
      setUser(currentUser);
    });
  });

  return (
    <Modal onClose={onClose} title="Log In" className="w-80">
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
          Log In
        </Button>
      </div>
    </Modal>
  );
}
