import { createContext, useEffect, useReducer } from "react";

const initialState = [
  {
    title: "Clean house",
    description: "Vacuum the floors and dust the furniture in the living room and bedrooms.",
    important: false,
    date: "2023-04-12",
    category: "house",
    completed: false,
    id: "1676258689",
  },
  {
    title: "Finish the report",
    description:
      "Complete the report for the client meeting. Include the latest sales figures and analysis of the competition.",
    important: false,
    date: "2021-06-20",
    category: "work",
    completed: true,
    id: "1676358689",
  },
  {
    title: "Study for exam",
    description: "Review chapters 1-3 for the upcoming exam. Focus on key concepts and formulas.",
    important: false,
    date: "2018-10-05",
    category: "school",
    completed: true,
    id: "1676458689",
  },
  {
    title: "Finish website design",
    description:
      "Complete the website design by the end of the week. Make sure to incorporate the client's branding guidelines and UX best practices.",
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
      return orderedTasks;
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
