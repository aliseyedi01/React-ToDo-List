import React, { useContext, useEffect, useRef, useState } from "react";
import { VscBell, VscBellDot } from "react-icons/vsc";
import { TaskContext } from "../../../State/taskReducer";
import { NavLink } from "react-router-dom";
import useHideClickOutside from "../../../hooks/useHideClickOutside";
export default function Notification() {
  const { state: tasks } = useContext(TaskContext);
  const [importantIncompleteTasks, setImportantIncompleteTasks] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);

  useHideClickOutside(notificationRef, () => {
    setShowNotification(false);
  });

  const showNotificationHandler = () => {
    setShowNotification((prev) => !prev);
  };

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => !task.completed && task.important);
    setImportantIncompleteTasks(filteredTasks);
  }, [tasks]);

  return (
    <div className="relative mt-2 justify-items-end" ref={notificationRef}>
      <button className="  cursor-pointer ">
        <VscBell
          className="text-xl text-indigo-800 drop-shadow-2xl dark:text-Dark_OnSurface md:text-2xl"
          onClick={showNotificationHandler}
        />
      </button>
      {importantIncompleteTasks.length > 0 && (
        <>
          <div className="dark:bg-yellow-400-600 absolute right-[2px] top-[.5px] h-2 w-2 animate-ping rounded-full bg-indigo-900 dark:bg-yellow-400 md:top-[1px]"></div>
          <div className="absolute right-[2px] top-[.5px] h-2 w-2 rounded-full bg-indigo-900 dark:bg-yellow-400 md:top-[1px]"></div>
        </>
      )}

      {importantIncompleteTasks.length > 0 && showNotification && (
        <div className="  absolute right-0 top-8  z-20  max-h-24 w-44 rounded-lg  bg-gray-300 p-1 dark:bg-Dark_OnSurface md:w-56 ">
          <p className="font-Rubik text-xs md:text-sm ">You Have Important Task :</p>
          <ul className="hide-scrollbar max-h-16 w-full  overflow-y-scroll   ">
            {importantIncompleteTasks.map((task) => (
              <NavLink to={`task/${task.id}`}>
                <li
                  className="mt-1 flex w-full justify-between rounded-lg bg-slate-500 px-2 font-Montserrat text-sm text-slate-200"
                  key={task.id}
                >
                  <p className="w-14 truncate text-xs md:w-24 md:text-base ">{task.title}</p>
                  <p className="text-xs md:text-base">{task.date}</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
