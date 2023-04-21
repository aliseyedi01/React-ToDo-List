import { createContext, useReducer } from "react";

const initialState = ["house", "work", "school"];

const CategoryContext = createContext();

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.newCategory];
    case "REMOVE_CATEGORY":
      return state.filter((category) => category !== action.DeleteCategory);
    case "EDIT_CATEGORY":
      return state.map((category) =>
        category === action.oldCategory ? action.newCategory : category,
      );
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function CategoryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>{children}</CategoryContext.Provider>
  );
}

export { CategoryContext, CategoryProvider };
