import React, { useContext, useEffect, useRef, useState } from "react";
import { FaFilter, FaThList } from "react-icons/fa";
import useHideClickOutside from "../../../hooks/useHideClickOutside";
import { TaskContext } from "../../../State/taskReducer";

export default function TaskFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortName, setSortName] = useState("Newest");
  const filterRef = useRef(null);
  const { state: tasks, dispatch } = useContext(TaskContext);

  console.log(tasks);

  useHideClickOutside(filterRef, () => {
    setIsFilterOpen(false);
  });

  const toggleFilterOpen = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  return (
    <div ref={filterRef} className="relative   ">
      <button
        className=" flex  w-[137px] items-center gap-1 rounded-lg bg-slate-300 px-1 py-1 font-DynaPuff text-sm md:w-44  md:px-2 md:text-base"
        onClick={toggleFilterOpen}
      >
        <FaFilter /> <span className=" font-Rubik text-gray-800 ">Filter :</span> {sortName}
      </button>
      <ul
        className={`absolute left-3 top-9 list-inside list-disc rounded-md bg-slate-400/[.3] py-1 pl-3  pr-10 font-DynaPuff text-sm text-slate-800 backdrop-blur-sm dark:text-gray-300  ${
          isFilterOpen ? "visible" : "hidden"
        }`}
      >
        <li
          className="cursor-pointer  hover:text-red-700 dark:hover:text-yellow-300 "
          onClick={(e) => {
            setSortName(e.target.innerText);
            dispatch({ type: "NEWEST_TASK" });
          }}
        >
          Newest
        </li>
        <li
          className="cursor-pointer  hover:text-red-700 dark:hover:text-yellow-300 "
          o
          onClick={(e) => {
            setSortName(e.target.innerText);
            dispatch({ type: "OLDEST_TASK" });
          }}
        >
          Oldest
        </li>
        <li
          className="cursor-pointer  hover:text-red-700 dark:hover:text-yellow-300 "
          onClick={(e) => {
            setSortName(e.target.innerText);
            dispatch({ type: "ORDER_TASK" });
          }}
        >
          Order
        </li>
      </ul>
    </div>
  );
}
