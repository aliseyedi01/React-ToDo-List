import { TiThMenu } from "react-icons/ti";
import SearchTask from "./SearchTask";
import Time from "./Time";
import Accounts from "./Accounts";
import Notification from "./Notification";
import DarkMode from "../../sidebar/DarkMode";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-2 bg-Light_Surface/50  px-3  dark:bg-Dark_Surface/95">
      <div className="flex items-center gap-3">
        <TiThMenu className="m-3 text-2xl text-red-500" />
        <SearchTask />
      </div>
      <Time />
      <div className="flex items-center gap-5">
        <Notification />
        <DarkMode />
        <Accounts />
      </div>
    </header>
  );
}
