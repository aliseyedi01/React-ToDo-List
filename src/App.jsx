import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import { TaskSection } from "./components/Task";
import { MenuProvider } from "./State/menuReducer";

function App() {
  return (
    <div className=" flex h-screen w-full overflow-y-hidden bg-Light_Background dark:bg-Dark_Background ">
      <MenuProvider>
        <Sidebar />
        <TaskSection />
      </MenuProvider>
    </div>
  );
}

export default App;
