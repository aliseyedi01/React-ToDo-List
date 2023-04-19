import React from "react";
import TaskInfo from "./TaskInfo";
import TaskAction from "./TaskAction";

export default function TaskItem({ isListInView, task }) {
  return (
    <>
      <li
        className={`flex rounded-lg bg-slate-100 p-1 text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent sm:p-3 ${
          isListInView ? " flex-col sm:h-32" : "h-60 flex-col sm:h-64"
        }`}
      >
        <TaskInfo isListInView={isListInView} task={task} />
        <TaskAction task={task} />
      </li>
    </>
  );
}
