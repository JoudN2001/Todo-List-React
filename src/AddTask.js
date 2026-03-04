import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useContext } from "react";
import { ToDoListContext } from "./Context/ToDoListContext";

let id = 6;
export default function AddTask() {
  const { tasks, setTasks } = useContext(ToDoListContext);
  const [taskTitle, setTaskTitle] = useState("");
  function addTaskCard() {
    return setTasks([...tasks,
      {
        id: id,
        title: taskTitle,
        subTitle: "",
        isDone: false,
      },
    ]);
  }
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "stretch",
        my: 2,
        mx: 1,
        width: "100%",
      }}
    >
      <TextField
        dir="rtl"
        label="عنوان المهمة"
        variant="outlined"
        style={{ width: "75%" }}
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <Button
        variant="contained"
        style={{ width: "20%", fontSize: 18 }}
        onClick={() => {
          id++;
          addTaskCard();
          setTaskTitle("")
        }}
      >
        إضافة <AddIcon sx={{ mx: 0.3 }} />
      </Button>
    </Stack>
  );
}
