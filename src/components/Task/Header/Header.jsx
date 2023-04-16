import { TiThMenu } from "react-icons/ti";
import SearchTask from "./SearchTask";
import Time from "./Time";
import Accounts from "./Accounts";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between gap-2 bg-Light_Surface/50  px-3  dark:bg-Dark_Surface/95">
      <TiThMenu className="m-3 text-2xl text-red-500" />
      <SearchTask />
      <Time />
      <Accounts />
    </header>
  );
}
