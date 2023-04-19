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
    description: "This is the description for this task 2",
    important: false,
    date: "2021-06-20",
    category: "Main",
    completed: false,
    id: "t2",
  },
  {
    title: "Task 3",
    description: "This is the description for this task 3",
    important: true,
    date: "2018-10-05",
    category: "Main",
    completed: false,
    id: "t3",
  },
];

const TaskContext = createContext();

function reducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return { isOpenMenu: true };
    case "CLOSE_MENU":
      return { isOpenMenu: false };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}

export { TaskContext, TaskProvider };
