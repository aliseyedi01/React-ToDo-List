import { TiThMenu } from "react-icons/ti";
import SearchTask from "./SearchTask";
import Time from "./Time";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-start gap-2 bg-yellow-500">
      <button>
        <TiThMenu className="m-3 text-2xl text-red-500" />
      </button>
      <SearchTask />
      <Time />
    </header>
  );
}
