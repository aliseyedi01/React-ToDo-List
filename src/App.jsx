import "./App.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "./components/customs/@core";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex ">
      <Sidebar />
    </div>
  );
}

export default App;
