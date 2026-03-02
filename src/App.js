import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

// Component
import ToDoWindow from "./ToDoWindow";
import AlertOnEvent from "./AlertOnEvent";
import EditPopUp from "./EditPopUp";
import DeletePopUp from "./DeletePopUp";

//Context
import { IsDoneContext } from "./Context/IsDoneContext";
import { ToDoListContext } from "./Context/ToDoListContext";

const them = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

const initialTasks = [
  {
    id: 1,
    title: "دراسة مفاهيم React",
    subTitle: "مراجعة الـ Context API و Hooks وتطبيقها في المشروع",
    isDone: true,
  },
  {
    id: 2,
    title: "شراء مستلزمات المنزل",
    subTitle: "قهوة، حليب، خضروات",
    isDone: false,
  },
  {
    id: 3,
    title: "تجهيز أوراق السفر",
    subTitle: "",
    isDone: false,
  },
  {
    id: 4,
    title: "دفع فواتير شهر 3",
    subTitle: "دفع فاتورة الكهرباء والإنترنت عبر التطبيق البنكي",
    isDone: true,
  },
  {
    id: 5,
    title: "تصميم واجهة المستخدم",
    subTitle: "استخدام Adobe Illustrator لتجهيز الأيقونات الجديدة للموقع",
    isDone: false,
  },
];

function App() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <ThemeProvider theme={them}>
      <ToDoListContext.Provider value={{ tasks, setTasks }}>
        <IsDoneContext.Provider value={{ filter, setFilter }}>
          <div
            className="App"
            dir="rtl"
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ToDoWindow />
          </div>
          {/* <AlertOnEvent/> */}
          {/* <EditPopUp /> */}
          {/* <DeletePopUp /> */}
        </IsDoneContext.Provider>
      </ToDoListContext.Provider>
    </ThemeProvider>
  );
}

export default App;
