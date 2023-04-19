import { useContext } from "react";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { TaskContext } from "../../State/taskReducer";

export default function TaskDone() {
  const { state: tasks, dispatch } = useContext(TaskContext);

  const tasksToDo = tasks.filter((task) => task.completed === false);
  return <LayoutPages title="ToDo Task" tasks={tasksToDo} />;
}
