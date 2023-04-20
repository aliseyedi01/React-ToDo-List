import { useParams } from "react-router-dom";
import LayoutPages from "../Layout/Pages/LayoutPages";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../State/taskReducer";

export default function TaskCategory() {
  const params = useParams();
  const { state: tasks, dispatch } = useContext(TaskContext);
  const [currentTaskCategory, setCurrentTaskCategory] = useState([]);

  useEffect(() => {
    const tasksFiltered = tasks.filter((task) => {
      return task.category === params.ctg;
    });

    setCurrentTaskCategory(tasksFiltered);
  }, [tasks, params.ctg]);

  return <LayoutPages title={`${params.ctg}`} tasks={currentTaskCategory} />;
}
