import "./App.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "./components/customs/@core";
import Sidebar from "./components/sidebar/Sidebar";
import { TaskSection } from "./components/Task";

function App() {
  return (
    <div className=" flex min-h-screen  w-full bg-Light_Background dark:bg-Dark_Background ">
      <Sidebar />
      <TaskSection />
    </div>
  );
}

export default App;
