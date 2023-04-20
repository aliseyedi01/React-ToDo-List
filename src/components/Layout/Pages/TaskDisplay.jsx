import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { NewTaskButton } from "../../Utilities";

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

        <NewTaskButton isListInView={isListInView} />
      </ul>
    </div>
  );
}
