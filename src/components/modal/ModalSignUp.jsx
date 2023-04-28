import React, { useState } from "react";
import Modal from "./Modal";
import { Button, LabelModal } from "../customs/@core";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function ModalSignUp({ onClose }) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });

  const signUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      // console.log(user);
      onClose();
    } catch (error) {
      console.log(error.message);
      switch (error.code) {
        case "auth/weak-password":
          setErrors({
            password: "Password should be at least 6 characters",
            email: "",
          });
          break;
        case "auth/email-already-in-use":
          setErrors({
            password: "",
            email: "The email address is already in use by another account.",
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
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}{" "}
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
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}{" "}
        </div>

        <Button className="bg-sky-800 text-slate-300" onClick={signUp}>
          sign Up
        </Button>
      </div>
    </Modal>
  );
}
