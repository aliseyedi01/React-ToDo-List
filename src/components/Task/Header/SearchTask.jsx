import React from "react";
import { InputModal } from "../../customs/@core";
import { BiSearch } from "react-icons/bi";

export default function SearchTask() {
  return (
    <div className="w-full md:w-max">
      <form className="relative w-full md:w-max">
        <label htmlFor="search" className="sr-only"></label>
        <InputModal
          type="search"
          id="search"
          placeholder="search task"
          className=" h-10 w-full pl-8"
        />
        <BiSearch className="absolute left-2 top-[14px] text-xl text-slate-400  " />
      </form>
    </div>
  );
}
