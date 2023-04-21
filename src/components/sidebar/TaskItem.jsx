import { IoIosArrowDown, IoIosToday } from "react-icons/io";
import { BsListTask } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdRemoveDone, MdDoneAll } from "react-icons/md";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TaskContext } from "../../State/taskReducer";
import { useContext } from "react";

const Items = [
  {
    name: "All",
    path: "/all",
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
  const route = useLocation();
  const currentPath = route.pathname;
  const { state: tasks } = useContext(TaskContext);

  const toggleTaskOpen = () => {
    setIsTaskOpen((prevState) => !prevState);
  };

  const Items = [
    {
      name: "All",
      path: "/all",
      icon: <BsListTask />,
      count: tasks.length,
    },
    {
      name: "Today",
      path: "/today",
      icon: <IoIosToday />,
      count: tasks.filter((task) => task.date === new Date().toISOString().slice(0, 10)).length,
    },
    {
      name: "Important",
      path: "/important",
      icon: <AiFillStar />,
      count: tasks.length,
    },
    {
      name: "Done",
      path: "/Done",
      icon: <MdDoneAll />,
      count: tasks.filter((task) => task.completed).length,
    },
    {
      name: "ToDo",
      path: "/ToDo",
      icon: <MdRemoveDone />,
      count: tasks.filter((task) => !task.completed).length,
    },
  ];

  return (
    <div className=" mt-4 h-max w-full items-start self-start px-3 text-Light_OnSurface transition-none dark:text-Dark_OnSurface">
      <button
        className=" flex w-full items-center justify-between font-Montserrat text-base md:text-lg"
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
            <li key={i}>
              <NavLink
                to={item.path}
                className={`flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-2 text-sm text-Light_OnSurface transition-none hover:text-rose-600 dark:text-Dark_OnSurface dark:hover:text-slate-100 md:text-base ${
                  currentPath === item.path ? "rounded-lg bg-gray-300 dark:bg-indigo-800" : ""
                }`}
              >
                <div className="w-fuu flex items-center gap-1">
                  {item.icon}
                  {item.name}
                </div>
                <div className="text-indigo-500-400 translate-x-[5px] font-Montserrat text-xs ">
                  {item.count}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
