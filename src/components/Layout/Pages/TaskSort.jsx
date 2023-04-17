import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../customs/@core";
import { BsGridFill } from "react-icons/bs";
import { FaFilter, FaThList } from "react-icons/fa";

const Filters = ["Newest", "Oldest", "Done", "UnDo", "Order"];

export default function TaskSort({ isListInView, setIsListInView }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortName, setSortName] = useState("Newest");
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [filterRef]);

  const toggleFilterOpen = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const getSortFilter = (e) => {
    // console.log(e.target.innerText);
    setSortName(e.target.innerText);
  };

  return (
    <div className="flex gap-2">
      {/* view button */}
      <div className="flex h-max  items-center rounded-lg bg-white ">
        <button
          className={`rounded-lg  px-2 py-1  ${isListInView ? "bg-sky-400" : ""}`}
          onClick={() => {
            setIsListInView(true);
          }}
        >
          <FaThList className="text-2xl  " />
        </button>
        <button
          className={`rounded-lg  px-2 py-1  ${!isListInView ? "bg-sky-400" : ""}`}
          onClick={() => {
            setIsListInView(false);
          }}
        >
          <BsGridFill className="text-2xl" />
        </button>
      </div>

      {/* filter button */}
      <div ref={filterRef} className="relative ">
        <button
          className=" flex w-44 items-center gap-2 rounded-lg bg-white px-2 py-1 font-DynaPuff"
          onClick={toggleFilterOpen}
        >
          <FaFilter /> <span className=" font-Rubik">Filter :</span> {sortName}
        </button>
        <ul
          className={`absolute left-3 top-9 list-inside list-disc rounded-md bg-slate-400 py-1  pl-3 pr-10 font-DynaPuff text-sm text-slate-800 ${
            isFilterOpen ? "visible" : "hidden"
          }`}
        >
          {Filters.map((filter, i) => {
            return (
              <li key={i} className="cursor-pointer hover:text-slate-100 " onClick={getSortFilter}>
                {filter}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
