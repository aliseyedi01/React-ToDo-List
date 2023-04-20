import { createContext, useReducer } from "react";

const initialState = [
  {
    title: "Task 1",
    description: "This is the description for this task 1",
    important: false,
    date: "2023-04-12",
    category: "Main",
    completed: true,
    id: "t1",
  },
  {
    title: "Task 2",
    description:
      "This is the description for this task 2 This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2This is the description for this task 2",
    important: false,
    date: "2021-06-20",
    category: "Work",
    completed: false,
    id: "t2",
  },
  {
    title: "Task 3",
    description:
      "This is the description for this task 3 This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3This is the description for this task 3",
    important: true,
    date: "2018-10-05",
    category: "School",
    completed: false,
    id: "t3",
  },
  {
    title: "Task 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    important: true,
    date: "2023-04-19",
    category: "Main",
    completed: false,
    id: "t4",
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

export { TaskContext, TaskProvider };
