import { createContext, useEffect, useReducer } from "react";

const initialState = [
  {
    title: "Task 1",
    description: "This is the description for this task 1",
    important: false,
    date: "2023-04-12",
    category: "house",
    completed: false,
    id: "1676258689",
  },
  {
    title: "Task 2",
    description:
      "This is the description for this task 2 This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2",
    important: false,
    date: "2021-06-20",
    category: "work",
    completed: true,
    id: "1676358689",
  },
  {
    title: "Task 3",
    description:
      "This is the description for this task 3 This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3",
    important: false,
    date: "2018-10-05",
    category: "school",
    completed: true,
    id: "1676458689",
  },
  {
    title: "Task 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    important: false,
    date: "2023-04-19",
    category: "work",
    completed: true,
    id: "1676558689",
  },
];
const TaskContext = createContext();

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DONE_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, completed: true } : task));
    case "UNDO_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, completed: false } : task));
    case "Important_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, important: true } : task));
    case "UnImportant_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, important: false } : task));
    case "Delete_TASK":
      return state.filter((task) => task.id !== action.id);
    case "ADD_NEW_TASK":
      return [...state, action.task];
    case "EDIT_TASK":
      return state.map((task) => (task.id === action.id ? { ...task, ...action.task } : task));
    case "NEWEST_TASK":
      const newestTasks = [...state].sort((a, b) => new Date(b.date) - new Date(a.date));
      return newestTasks.map((task, index) => (index === 0 ? { ...task, ...action.task } : task));
    case "OLDEST_TASK":
      const oldestTasks = [...state].sort((a, b) => new Date(a.date) - new Date(b.date));
      return oldestTasks.map((task, index) => (index === 0 ? { ...task, ...action.task } : task));
    case "ORDER_TASK":
      const orderedTasks = [...state].sort((a, b) => a.id - b.id);
    case "SET_TASKS":
      return action.tasks;

      return orderedTasks;
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch({ type: "SET_TASKS", tasks: storedTasks });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

export { TaskContext, TaskProvider };
