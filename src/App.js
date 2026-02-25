import "./App.css";
import ToDoWindow from "./ToDoWindow";
import { createTheme, ThemeProvider } from "@mui/material";

const them = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});

function App() {
  return (
    <ThemeProvider theme={them}>
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
    </ThemeProvider>
  );
}

export default App;
