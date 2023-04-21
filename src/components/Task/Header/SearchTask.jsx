import React, { useEffect, useState } from "react";
import { InputModal } from "../../customs/@core";
import { BiSearch } from "react-icons/bi";
import ModalSearch from "../../modal/ModalSearch";

export default function SearchTask() {
  const [showModalSearch, setShowModalSearch] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setShowModalSearch(true);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {showModalSearch && (
        <ModalSearch
          onClose={() => {
            setShowModalSearch(false);
          }}
        />
      )}

      <div className=" w-full md:w-max">
        <button
          className="y flex w-full items-center justify-between gap-2 rounded-md  bg-slate-300 px-2  py-1 text-base hover:bg-slate-400 dark:bg-slate-300"
          onClick={() => {
            setShowModalSearch(true);
          }}
        >
          <BiSearch className="text-red-00  text-xl  " />
          Quick Search ...
          <span className="rounded-md  bg-indigo-500 px-2 py-1 text-xs text-slate-200 ">
            Ctrl K{" "}
          </span>
        </button>
      </div>
    </>
  );
}
