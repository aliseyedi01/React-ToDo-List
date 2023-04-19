import { createContext, useReducer } from "react";

const initialState = {
  isOpenMenu: false,
};

const MenuContext = createContext();

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

function MenuProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <MenuContext.Provider value={{ state, dispatch }}>{children}</MenuContext.Provider>;
}

export { MenuContext, MenuProvider };
