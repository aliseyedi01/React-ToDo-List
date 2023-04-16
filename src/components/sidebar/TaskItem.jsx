import { IoIosArrowDown, IoIosToday } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdRemoveDone, MdDoneAll } from "react-icons/md";
import { useState } from "react";

const Items = [
  {
    name: "All",
    path: "/",
    icon: <BsListTask />,
  },
  {
    name: "Today",
    path: "/today",
    icon: <IoIosToday />,
  },
  {
    name: "Important",
    path: "/important",
    icon: <AiFillStar />,
  },
  {
    name: "Done",
    path: "/Done",
    icon: <MdDoneAll />,
  },
  {
    name: "ToDo",
    path: "/ToDo",
    icon: <MdRemoveDone />,
  },
];

export default function TaskItem() {
  const [isTaskOpen, setIsTaskOpen] = useState(false);

  const toggleTaskOpen = () => {
    setIsTaskOpen((prevState) => !prevState);
  };

  return (
    <div className=" mt-4 h-max w-full items-start self-start px-3 text-Light_OnSurface dark:text-Dark_OnSurface">
      <button
        className=" flex w-full items-center justify-between font-Montserrat"
        onClick={toggleTaskOpen}
      >
        Task
        <IoIosArrowDown
          className={`mr-2 h-3 w-3  transition duration-300 ${isTaskOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={!isTaskOpen ? "visible" : "hidden"}>
        <ul>
          {Items.map((item, i) => (
            <li
              key={i}
              className=" flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-Light_OnSurface transition hover:text-rose-800 dark:text-Dark_OnSurface dark:hover:text-slate-100"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
