import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../customs/@core";
import { BsGridFill } from "react-icons/bs";
import { FaFilter, FaThList } from "react-icons/fa";
import TaskFilter from "./TaskFilter";

export default function TaskSort({ isListInView, setIsListInView }) {
  return (
    <div className="mt-2 flex gap-2 md:mt-0 md:w-max ">
      {/* view button */}
      <div className="flex h-max items-center rounded-lg bg-slate-300 ">
        <button
          className={`rounded-lg  px-2 py-1  ${
            isListInView ? "bg-sky-600 dark:bg-indigo-400" : ""
          }`}
          onClick={() => {
            setIsListInView(true);
          }}
        >
          <FaThList className="text-base text-gray-900 dark:text-blue-800 md:text-xl  " />
        </button>
        <button
          className={`rounded-lg  px-2 py-1  ${
            !isListInView ? "bg-sky-600 dark:bg-indigo-400" : ""
          }`}
          onClick={() => {
            setIsListInView(false);
          }}
        >
          <BsGridFill className="text-xm text-gray-900 dark:text-blue-800 md:text-xl " />
        </button>
      </div>

      {/* filter button */}
      <TaskFilter />
    </div>
  );
}
