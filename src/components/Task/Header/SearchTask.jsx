import React from "react";
import { InputModal } from "../../customs/@core";
import { BiSearch } from "react-icons/bi";

export default function SearchTask() {
  return (
    <div className=" w-full md:w-max">
      <button className="y flex w-full items-center justify-between gap-2 rounded-md  bg-slate-300 px-2  py-1 text-base hover:bg-slate-400 dark:bg-slate-300">
        <BiSearch className="text-red-00  text-xl  " />
        Quick Search ...
        <span className="rounded-md  bg-indigo-500 px-2 py-1 text-xs text-slate-200 ">Ctrl K </span>
      </button>
    </div>
  );
}
