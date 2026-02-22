import "./App.css";
import FilterButtonGroup from "./FilterButtonGroup";
import CssBaseline from "@mui/material/CssBaseline";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <h1 dir="rtl">مهامي</h1>
        <hr />
        <FilterButtonGroup />
        <AddTask />
      </div>
    </>
  );
}

export default App;
