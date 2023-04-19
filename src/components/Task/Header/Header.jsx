import { useContext } from "react";
import { TiThMenu } from "react-icons/ti";
import SearchTask from "./SearchTask";
import Time from "./Time";
import Accounts from "./Accounts";
import Notification from "./Notification";
import DarkMode from "../../sidebar/DarkMode";
import { MenuContext } from "../../../State/menuReducer";

export default function Header() {
  const { state, dispatch } = useContext(MenuContext);

  // console.log("state header ", state.isOpenMenu);

  return (
    <header className="flex h-max w-full flex-col-reverse items-center justify-between gap-2  bg-Light_Surface/50 px-3 pb-3 dark:bg-Dark_Surface/95 md:h-16 md:flex-row  md:pb-0">
      <TiThMenu
        className="fixed left-2 top-2 m-2 text-lg text-red-500 md:hidden md:text-2xl"
        onClick={() => dispatch({ type: "OPEN_MENU" })}
      />
      <SearchTask />

      <Time />
      <div className="flex items-center gap-3  max-md:self-end max-md:pt-2 md:gap-5">
        <Notification />
        <DarkMode />
        <Accounts />
      </div>
    </header>
  );
}
