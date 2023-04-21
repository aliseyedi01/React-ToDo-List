import { useParams, useSearchParams } from "react-router-dom";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../State/taskReducer";

export default function TaskSingle() {
  const { state: tasks } = useContext(TaskContext);
  const param = useParams();
  const [task, setTask] = useState(null);

  // console.log(task, typeof task);

  useEffect(() => {
    setTask([tasks.find((task) => task.id === param.taskId)]);
  }, [param]);

  return <LayoutPages title="Task" tasks={task} />;
}
