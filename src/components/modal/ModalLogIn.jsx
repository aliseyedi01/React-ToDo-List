import React, { useState } from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

export default function ModalLogIn({ onClose }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [errors, setErrors] = useState({ password: "", email: "" });

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      // console.log(user);
      onClose();
    } catch (error) {
      console.log(error.message);
      switch (error.code) {
        case "auth/user-not-found":
          setErrors({
            email: "There is no user record corresponding to this email.",
            password: "",
          });
          break;
        case "auth/wrong-password":
          setErrors({
            password: "The password is invalid.",
            email: "",
          });
          break;
        default:
          setErrors({
            password: "",
            email: "",
          });
          break;
      }
    }
  };
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
              setSignInEmail(event.target.value);
            }}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
              setSignInPassword(event.target.value);
            }}
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
        </div>

        <Button className="bg-sky-800 text-slate-300" onClick={signIn}>
          Log In
        </Button>
      </div>
    </Modal>
  );
}
