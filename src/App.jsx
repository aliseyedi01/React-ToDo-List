import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import { TaskSection } from "./components/Task";
import { MenuProvider } from "./State/menuReducer";
import { TaskProvider } from "./State/taskReducer";

function App() {
  return (
    <div className=" flex h-screen w-full overflow-y-hidden bg-Light_Background dark:bg-Dark_Background ">
      <MenuProvider>
        <TaskProvider>
          <Sidebar />
          <TaskSection />
        </TaskProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
