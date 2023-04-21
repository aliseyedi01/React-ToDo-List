import React, { useEffect, useRef, useState } from "react";
import { FaFilter, FaThList } from "react-icons/fa";
import useHideClickOutside from "../../../hooks/useHideClickOutside";

const Filters = ["Newest", "Oldest", "Order"];

export default function TaskFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortName, setSortName] = useState("Newest");
  const filterRef = useRef(null);

  useHideClickOutside(filterRef, () => {
    setIsFilterOpen(false);
  });

  const toggleFilterOpen = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const getSortFilter = (e) => {
    setSortName(e.target.innerText);
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
        className={`absolute left-3 top-9 list-inside list-disc rounded-md bg-slate-400 py-1  pl-3 pr-10 font-DynaPuff text-sm text-slate-800 ${
          isFilterOpen ? "visible" : "hidden"
        }`}
      >
        {Filters.map((filter, i) => {
          return (
            <li key={i} className="cursor-pointer  hover:text-slate-100 " onClick={getSortFilter}>
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
