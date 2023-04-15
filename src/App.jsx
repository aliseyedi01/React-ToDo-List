import "./App.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "./components/customs/@core";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold  text-red-500 ">
        <FiSun />
        ToDo List App
      </h1>
      <Button>Ali</Button>
    </div>
  );
}

export default App;
