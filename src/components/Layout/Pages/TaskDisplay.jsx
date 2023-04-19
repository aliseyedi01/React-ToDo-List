import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskDisplay({ isListInView, tasks }) {
  // console.log(isListInView);
  // console.log(tasks);

  return (
    <div className="hide-scrollbar h-full overflow-y-scroll ">
      <ul
        className={`mt-4 grid gap-4  ${
          isListInView ? "grid-cols-1" : " md:grid-cols-2 lg:grid-cols-3 "
        }`}
      >
        {tasks?.map((task) => (
          <TaskItem key={task.id} isListInView={isListInView} task={task} />
        ))}

        <li
          className={`grid w-full place-content-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400 transition hover:bg-slate-300 hover:text-slate-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300 ${
            isListInView ? "h-20 sm:h-32" : "h-52 sm:h-64"
          }`}
        >
          Add New Task
        </li>
      </ul>
    </div>
  );
}
