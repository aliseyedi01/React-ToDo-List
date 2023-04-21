import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import { InputModal, LabelModal } from "../customs/@core";
import { BiSearch } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCheckSquareFill } from "react-icons/bs";
import { TaskContext } from "../../State/taskReducer";
import { ImCheckboxUnchecked } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function ModalSearch({ onClose }) {
  const { state: tasks } = useContext(TaskContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //   console.log(tasks);
  //   console.log("result", searchResults);

  useEffect(() => {
    if (searchValue === "") {
      setSearchResults([]);
    } else {
      const results = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setSearchResults(results);
    }
  }, [searchValue, tasks]);

  const searchTaskHandle = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Modal onClose={onClose} title="Search your Name Task">
      <LabelModal className="relative">
        <InputModal
          type="search"
          placeholder="Search Task ..."
          className=" w-full pl-8"
          onChange={searchTaskHandle}
        />
        <BiSearch className="text-red-00  absolute  left-2 top-4 text-xl " />
      </LabelModal>
      <div>
        <ul className="hide-scrollbar max-h-40 overflow-y-scroll rounded-sm ">
          {searchResults.map((task) => (
            <NavLink to={`task/${task.id}`}>
              <li
                key={task.id}
                className="mt-1 flex items-center justify-between rounded-sm bg-indigo-500 p-1  px-1  text-white"
              >
                <div>
                  <p className="text-base">{task.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-Montserrat text-sm ">{task.date}</p>

                  {task.important ? (
                    <AiFillStar className="text-base" />
                  ) : (
                    <AiOutlineStar className="text-base" />
                  )}

                  {task.completed ? <BsCheckSquareFill /> : <ImCheckboxUnchecked />}
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </Modal>
  );
}
