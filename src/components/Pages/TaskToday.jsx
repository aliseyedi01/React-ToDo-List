import React, { useContext } from "react";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { TaskContext } from "../../State/taskReducer";

export default function TaskToday() {
  const { state: tasks, dispatch } = useContext(TaskContext);

  // const newDate = new Date().toISOString().substring(0, 10);

  const today = new Date().toISOString().slice(0, 10);
  const tasksToday = tasks.filter((task) => task.date === today);
  console.log(tasksToday);

  return <LayoutPages title="Today Task" tasks={tasksToday} />;
}
