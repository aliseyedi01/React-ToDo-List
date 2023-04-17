import React from "react";
import TaskSort from "./TaskSort";

export default function LayoutPages() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-Montserrat text-xl">All Task</h1>
        <TaskSort />
      </div>
    </div>
  );
}
