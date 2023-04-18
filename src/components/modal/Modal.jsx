import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

export default function Modal({ children, title, onClose }) {
  const [closing, setClosing] = useState(false);

  const onCloseHandler = (event) => {
    if (event.target === event.currentTarget) {
      setClosing(true);
      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  return (
    <div
      className=" fixed inset-0 z-40 grid h-full w-full place-items-center bg-slate-600/[0.5] text-xs  text-slate-600 backdrop-blur-sm  dark:text-slate-300 sm:text-sm xl:text-base"
      onClick={onCloseHandler}
    >
      <section
        className={` relative flex w-full max-w-lg  flex-col justify-start rounded-lg bg-slate-200 p-3 opacity-100 dark:bg-slate-900 sm:p-5 ${
          closing ? "animate-scale-down-center" : "animate-scale-up-center"
        }`}
      >
        <RiCloseCircleFill
          className="absolute right-3 cursor-pointer  text-2xl sm:right-4"
          onClick={onClose}
        />
        <h2 className="mb-5 font-Lemon text-xl font-bold md:text-xl">{title}</h2>
        {children}
      </section>
    </div>
  );
}
